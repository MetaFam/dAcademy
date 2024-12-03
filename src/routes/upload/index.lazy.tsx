import { createLazyFileRoute } from '@tanstack/react-router'
import { useRef, useState, useEffect } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { UploadSidebar, accordionItems} from '@/components/Sidebars/uploadSidebar'
import { UploadCover } from '@/components/Upload/Cover'
import { UploadIntro } from '@/components/Upload/Intro'
import ChapterUpload from '@/components/Upload/ChapterUpload'
import { UploadPermissions } from '@/components/Upload/Permissions'
import { UploadTitle } from '@/components/Upload/Title'
import { Button } from '@/components/ui/button'
import { CompletionNFT } from '@/components/Upload/Completion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useAtomValue } from 'jotai'
import { frontMatterAtom } from '@/atoms/frontMatterAtom'
import { toHTTP, upload as toIPFS } from '@/lib/utils'
import { toast } from 'react-hot-toast'


export const Upload = () => {
  const [submitting, setSubmitting] = useState(false)
  const [chapterCount, setChapterCount] = useState(
    (() => {
      let count = 0
      while (localStorage.getItem(`chapter.${count}.title`) != null) {
        count++
      }
      return Math.max(2, count)
    })(),
  )
  const reloadCallbacks = useRef<Array<() => void>>([])
  const [accordionValue, setAccordionValue] = useState("item-1")
  const frontMatter = useAtomValue(frontMatterAtom)
  const upload = async () => {
    setSubmitting(true)
    try {
      if(!frontMatter.title) throw new Error('Missing title')
      if(!frontMatter.introduction) throw new Error('Missing introduction')
      if(!frontMatter.cover) throw new Error('missing cover')
      const coverToastId = toast.loading('Uploading cover to IPFS.')
      const cid = await fetch(frontMatter.cover)
      .then((res) =>  res.blob())
      .then((blob) => toIPFS([new File([blob], 'cover.jpg')]))
      toast.dismiss(coverToastId)

      const coverURL = `ipfs://${cid}/cover.jpg`
      const shortCoverURL = `ipfs://${cid.substring(0, 3)}…${cid.slice(-3)}/cover.jpg`
      toast.success(
        <p>Saved to <a target="_blank" href={toHTTP(coverURL)}>{shortCoverURL}</a>.</p>,
        { duration: 10_000 },
      )
      const metaToastId = toast.loading('Uploading metadata to IPFS.')
      const metadata = {
        title: frontMatter.title,
        introduction: frontMatter.introduction,
        cover: coverURL
      }
      const filename = `metadata.${new Date().toISOString()}.json`
      const metadataCID = await toIPFS(
        [new File([JSON.stringify(metadata, null, 2)], filename)],
      )
      toast.dismiss(metaToastId)
      const metadataURL = `ipfs://${metadataCID}/${filename}`
      const shortMetadataURL = `ipfs://${metadataCID.substring(0, 3)}…${metadataCID.slice(-3)}/${filename}`
      toast.success(
        <p>Saved to <a target="_blank" href={toHTTP(metadataURL)}>{shortMetadataURL}</a>.</p>,
        { duration: 10_000 },
      )
      console.log({metadataCID, metadataURL})
    } catch(error) {
      toast.error((error as Error).message)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chapterDeleted = (index: number) => {
    console.group('looping')
    for (let idx = index; idx < chapterCount - 1; idx++) {
      console.log({ idx, chapterCount })
      localStorage.setItem(
        `chapter.${idx}.title`,
        localStorage.getItem(`chapter.${idx + 1}.title`) ?? '',
      )
      localStorage.setItem(
        `chapter.${idx}.content`,
        localStorage.getItem(`chapter.${idx + 1}.content`) ?? '',
      )
      reloadCallbacks.current[idx].call(reloadCallbacks.current[idx])
    }
    console.groupEnd()
    if (chapterCount > 2) {
      localStorage.removeItem(`chapter.${chapterCount - 1}.title`)
      localStorage.removeItem(`chapter.${chapterCount - 1}.content`)
      setChapterCount(chapterCount - 1)
    } else {
      localStorage.setItem(`chapter.${chapterCount - 1}.title`, '')
      localStorage.setItem(`chapter.${chapterCount - 1}.content`, '')
    }

    reloadCallbacks.current[chapterCount - 1].call(
      reloadCallbacks.current[chapterCount - 1],
    )
  }
  const reloadCallback = (index: number, listener: () => void) => {
    reloadCallbacks.current[index] = listener
  }

  useEffect(() => {
    const sectionId = accordionItems.find(item => item.value === accordionValue)?.url;
    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {

        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [accordionValue, accordionItems]);

  return (
    <SidebarProvider>
      <UploadSidebar onAccordionChange={setAccordionValue} />
      <SidebarTrigger />
      <main className="flex-1 mt-12 w-screen mb-8">
        <div className="space-y-4 mx-auto w-2/3">
          <Accordion type="single" collapsible className="w-full" value={accordionValue} onValueChange={setAccordionValue}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Upload Cover</AccordionTrigger>
              <AccordionContent>
                <div id="upload-cover" className="pt-8 scroll-mt-12">
                  <UploadCover />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Upload Title</AccordionTrigger>
              <AccordionContent>
                <div id="book-title" className="pt-8 scroll-mt-12">
                  <UploadTitle />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Upload Intro</AccordionTrigger>
              <AccordionContent>
                <div id="book-intro" className="pt-8 scroll-mt-12">
                  <UploadIntro />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button disabled={submitting} onClick={upload} className="block mx-auto" type="button">
            {submitting ? 'Submitting' : 'Submit'}
          </Button>

          <div id="chapters" className="pt-8 scroll-mt-12">
            <ChapterUpload
              index={0}
              header="Book"
              contentHeader="Introduction"
            />

            {Array.from({ length: chapterCount - 1 }, (_, index) => (
              <ChapterUpload
                {...{ reloadCallback }}
                onDelete={chapterDeleted}
                key={index}
                index={index + 1}
              />
            ))}

            <div className="flex justify-center mt-4">
              <Button
                type="button"
                onClick={() => setChapterCount(chapterCount + 1)}
                className="items-center rounded-md"
              >
                Add Chapter
              </Button>
            </div>
          </div>
          <div id="completion" className="pt-8 scroll-mt-12">
            <CompletionNFT />
          </div>
          <div id="permissions" className="pt-8 scroll-mt-12">
            <UploadPermissions />
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export const Route = createLazyFileRoute('/upload/')({
  component: Upload,
})