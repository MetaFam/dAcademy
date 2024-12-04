import { ReactNode, useEffect, useState} from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useAtomValue } from "jotai"
import { frontMatterAtom } from "@/atoms/frontMatterAtom"
import { chaptersAtom } from "@/atoms/chapterAtom"
import { nftAtom } from "@/atoms/nftAtom"
import { usersAtom } from "@/atoms/usersAtom"
import { upload as toIPFS, toHTTP } from '@/lib/utils'
import { useWriteContract } from "wagmi"
import abi from '@/abis/QuestChainFactory.json'


export function UploadPlaybook() {
  const [open, setOpen] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [lines, setLines] = useState<Array<ReactNode>>([])
  const frontMatter = useAtomValue(frontMatterAtom)
  const chapters = useAtomValue(chaptersAtom)
  const nft = useAtomValue(nftAtom)
  const users = useAtomValue(usersAtom)
  const addLine = (line: ReactNode) => setLines((prev) => [...prev, line])

  const {
    writeContract,
  } = useWriteContract()

  useEffect(() => {
    const abortController = new AbortController()
    ;(async () => {
      try {
        const abortSignal = abortController.signal
        if(!nft.image) throw new Error('NFT Missing Image')
        if(!frontMatter.title) throw new Error('Missing title')
        if(!frontMatter.introduction) throw new Error('Missing introduction')
        if(!frontMatter.cover) throw new Error('missing cover')

        abortSignal.throwIfAborted()
        addLine('Uploading cover to IPFS.')
        const cid = await fetch(frontMatter.cover)
        .then((res) =>  res.blob())
        .then((blob) => toIPFS([new File([blob], 'cover.jpg')]))

        const coverURL = `ipfs://${cid}/cover.jpg`
        const shortCoverURL = `ipfs://${cid.substring(0, 3)}…${cid.slice(-3)}/cover.jpg`
        addLine(
          <p>Saved to <a target="_blank" href={toHTTP(coverURL)}>{shortCoverURL}</a>.</p>
        )

        abortSignal.throwIfAborted()
        addLine('Uploading frontmatter to IPFS.')
        const metadata = {
          title: frontMatter.title,
          introduction: frontMatter.introduction,
          cover: coverURL
        }
        const filename = `frontmatter.${new Date().toISOString()}.json`
        const metadataCID = await toIPFS(
          [new File([JSON.stringify(metadata, null, 2)], filename)],
        )
        const frontmatterURL = `ipfs://${metadataCID}/${filename}`
        const shortMetadataURL = `ipfs://${metadataCID.substring(0, 3)}…${metadataCID.slice(-3)}/${filename}`
        addLine(
          <p>Saved to <a target="_blank" href={toHTTP(frontmatterURL)}>{shortMetadataURL}</a>.</p>
        )

        const chapterURLs = await Promise.all(
          chapters.map(async (chapter, idx) => {
            addLine(`Uploading chapter #${idx + 1} to IPFS.`)
            const metadata = {
              title: chapter.title,
              description: chapter.content,
            }
            const filename = `chapter.${new Date().toISOString()}.json`
            abortSignal.throwIfAborted()
            const metadataCID = await toIPFS(
              [new File([JSON.stringify(metadata, null, 2)], filename)],
            )
            const metadataURL = `ipfs://${metadataCID}/${filename}`
            const shortMetadataURL = `ipfs://${metadataCID.substring(0, 3)}…${metadataCID.slice(-3)}/${filename}`
            addLine(
              <p>Saved to <a target="_blank" href={toHTTP(metadataURL)}>{shortMetadataURL}</a>.</p>
            )
            return metadataURL
          })
        )

        addLine('Uploading NFT Image to IPFS.')
        abortSignal.throwIfAborted()

        const nftImageCID = await fetch(nft.image)
        .then((res) =>  res.blob())
        .then((blob) => toIPFS([new File([blob], 'image.svg')]))

        const nftImageURL = `ipfs://${nftImageCID}/image.svg`
        const shortNFTImageURL = `ipfs://${nftImageCID.substring(0, 3)}…${nftImageCID.slice(-3)}/image.svg`
        addLine(
          <p>Saved to <a target="_blank" href={toHTTP(nftImageURL)}>{shortNFTImageURL}</a>.</p>
        )

        addLine('Uploading NFT metadata to IPFS.')
        abortSignal.throwIfAborted()
        const nftMetadata = {
          title: nft.name,
          description: nft.description,
          image: nftImageURL,
        }
        const nftFilename = `nft.${new Date().toISOString()}.json`
        const nftMetadataCID = await toIPFS(
          [new File([JSON.stringify(nftMetadata, null, 2)], nftFilename)],
        )
        const nftMetadataURL = `ipfs://${nftMetadataCID}/${nftFilename}`
        const shortNFTMetadataURL = `ipfs://${nftMetadataCID.substring(0, 3)}…${nftMetadataCID.slice(-3)}/${nftFilename}`
        addLine(
          <p>Saved to <a target="_blank" href={toHTTP(nftMetadataURL)}>{shortNFTMetadataURL}</a>.</p>
        )

        const userGroups = Object.groupBy(users, ({role}) => role ?? 'unknown')
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
          `0x${Array.from(randomBuffer).map((byte) => (
            byte.toString(16).padStart(2, '0')
          )).join('')}`,
        ]

        abortSignal.throwIfAborted()
        writeContract({
          address: '0x0d006D9e862B362180eb602e5973Fd1fdb6f78dd',
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
                <a href={`https://optimistic.etherscan.io/tx/${hash}`} className="mx-1 whitespace-nowrap text-primary hover:text-secondary" target="_blank">
                  {hash.substring(0, 8)}…{hash.slice(-6)}
                </a>.
              </p>,
            )
          )
        })

      } catch(error) {
        addLine(<p className="text-red-500">{(error as Error).message}</p>)
      } finally {
        // setSubmitting(false)
      }
    })()
    return () => abortController.abort('Mounted twice, aborting double.')
  }, [])

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Uploading Playbook</DialogTitle>
            <DialogDescription>
              <ol>
                {lines.map((line) => <li>{line}</li>)}
              </ol>
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
            <ol>
              {lines.map((line) => <li>{line}</li>)}
            </ol>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

