import { ReactNode, useEffect, useState} from 'react'
import { useAtomValue } from 'jotai'
import { useWriteContract } from 'wagmi'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { frontMatterAtom } from '@/atoms/frontMatterAtom'
import { chaptersAtom } from '@/atoms/chapterAtom'
import { nftAtom } from '@/atoms/nftAtom'
import { usersAtom } from '@/atoms/usersAtom'
import {
  upload as toIPFS, toHTTP, toSlug, timestamp, toHex,
} from '@/lib/utils'
import { useEtherscan, useFactory } from '@/hooks'
import { useIsMobile } from '@/hooks/useIsMobile'
import abi from '@/abis/QuestChainFactory.json'
import { categoriesAtom } from '@/atoms/categoriesAtom'

const ipfsFilenames = (cid: string, filename: string) => ([
  `ipfs://${cid}/${filename}`,
  `ipfs://${cid.substring(0, 3)}…${cid.slice(-3)}/${filename}`,
])

const Link = (
  { url, children }: { url: string, children: ReactNode }
) => (
  <a
    target="_blank"
    href={toHTTP(url)}
    className="ml-1 whitespace-nowrap text-primary hover:text-secondary"
  >
    {children}
  </a>
)

const completion = (...names: [string, string]) => {
  const [url, shortURL] = ipfsFilenames(...names)
  return {
    url,
    link: <p>Saved to <Link {...{ url }}>{shortURL}</Link>.</p>,
  }
}

export function UploadPlaybook() {
  const [open, setOpen] = useState(true)
  const isDesktop = !useIsMobile()
  const [lines, setLines] = useState<Array<ReactNode>>([])
  const frontMatter = useAtomValue(frontMatterAtom)
  const chapters = useAtomValue(chaptersAtom)
  const nft = useAtomValue(nftAtom)
  const users = useAtomValue(usersAtom)
  const categories = useAtomValue(categoriesAtom)
  const addLine = (line: ReactNode) => {
    setLines((prev) => [...prev, line])
  }
  const { writeContract } = useWriteContract()
  const etherscan = useEtherscan()
  const factoryAddress = useFactory()

  useEffect(() => {
    const abortController = new AbortController()
    ;(async () => {
      try {
        const abortSignal = abortController.signal
        if(!factoryAddress) {
          throw new Error('Missing Factory Address')
        }
        if(!nft.image) throw new Error('NFT Missing Image')
        if(!frontMatter.title) throw new Error('Missing Title')
        if(!frontMatter.introduction) {
          throw new Error('Missing Introduction')
        }
        if(!frontMatter.cover) throw new Error('Missing Cover')

        abortSignal.throwIfAborted()
        addLine('Uploading cover to IPFS…')
        const cid = await fetch(frontMatter.cover)
        .then((res) =>  res.blob())
        .then((blob) => toIPFS([new File([blob], 'cover.jpg')]))

        const { url: coverURL, link: coverLink } = (
          completion(cid, 'cover.jpg')
        )
        addLine(coverLink)

        abortSignal.throwIfAborted()
        addLine('Uploading frontmatter to IPFS…')
        const metadata = {
          name: frontMatter.title,
          description: frontMatter.introduction,
          cover: coverURL,
          slug: toSlug(frontMatter.title),
          categories,
          createdAt: timestamp(),
        }
        const filename = `frontmatter.json`
        const metadataCID = await toIPFS(
          [new File([JSON.stringify(metadata, null, 2)], filename)],
        )
        const { url: frontmatterURL, link: frontmatterLink } = (
          completion(metadataCID, filename)
        )
        addLine(frontmatterLink)

        const chapterURLs = await Promise.all(
          chapters.map(async (chapter, idx) => {
            abortSignal.throwIfAborted()
            addLine(`Uploading chapter #${idx + 1} to IPFS…`)
            const metadata = {
              name: chapter.title,
              description: chapter.content,
              createdAt: timestamp(),
            }
            const filename = `chapter.${idx + 1}.json`
            const chapterCID = await toIPFS(
              [new File([JSON.stringify(metadata, null, 2)], filename)],
            )
            const { url: chapterURL, link: chapterLink } = (
              completion(chapterCID, filename)
            )
            addLine(chapterLink)

            return chapterURL
          })
        )

        abortSignal.throwIfAborted()
        addLine('Uploading NFT Image to IPFS…')

        const nftImageCID = (
          await fetch(nft.image)
          .then((res) =>  res.blob())
          .then((blob) => toIPFS([new File([blob], 'image.svg')]))
        )
        const { url: nftImageURL, link: nftImageLink } = (
          completion(nftImageCID, 'image.svg')
        )
        addLine(nftImageLink)

        abortSignal.throwIfAborted()
        addLine('Uploading NFT metadata to IPFS…')
        const nftMetadata = {
          name: nft.name,
          description: nft.description,
          image: nftImageURL,
          properties: {
            createdAt: timestamp(),
          },
        }
        const nftFilename = `nft.json`
        const nftMetadataCID = await toIPFS(
          [new File(
            [JSON.stringify(nftMetadata, null, 2)],
            nftFilename,
          )],
        )

        const { url: nftMetadataURL, link: nftMetadataLink } = (
          completion(nftMetadataCID, nftFilename)
        )
        addLine(nftMetadataLink)

        const userGroups = (
          Object.groupBy(users, ({role}) => role ?? 'unknown')
        )
        const addressGroups = Object.fromEntries(
          Object.entries(userGroups).map(([role, users]) => (
            [role, users?.map(({address}) => address)]
          ))
        )

        const randomBuffer = new Uint8Array(32)
        crypto.getRandomValues(randomBuffer)
        const args = [
          {
            owners: addressGroups.owner ?? [],
            admins: addressGroups.admin ?? [],
            editors: addressGroups.editor ?? [],
            reviewers: addressGroups.reviewer ?? [],
            quests: chapterURLs,
            paused: false,
            details: frontmatterURL,
            tokenURI: nftMetadataURL,
          },
          toHex(randomBuffer),
        ]

        console.debug({ args })

        abortSignal.throwIfAborted()
        writeContract({
          address: factoryAddress,
          abi,
          functionName: 'create',
          args,
        }, {
          onError: (error) => {
            console.error({ error })
            addLine(
              (error as { shortMessage: string }).shortMessage
              ?? error.message,
            )
          },
          onSuccess: (hash) => (
            addLine(
              <p>
                Submitted in transaction
                <a
                  href={`${etherscan}/tx/${hash}`}
                  target="_blank"
                  className="ml-1 whitespace-nowrap text-primary hover:text-secondary"
                >
                  {hash.substring(0, 8)}…{hash.slice(-6)}
                </a>.
              </p>,
            )
          )
        })

      } catch(error) {
        addLine(<p className="text-red-500">
          {(error as Error).message}
        </p>)
      } finally {
        // setSubmitting(false)
      }
    })()
    return () => abortController.abort('Mounted twice, aborting double.')
  }, [])

  if(isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Uploading Playbook</DialogTitle>
            <DialogDescription>
              <ol>{lines.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}</ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Uploading Playbook</DrawerTitle>
          <DrawerDescription>
            <ol>{lines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}</ol>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
