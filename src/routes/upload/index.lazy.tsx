import { createLazyFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
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
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { frontMatterAtom } from '@/atoms/frontMatterAtom'
import { toHTTP, upload as toIPFS } from '@/lib/utils'
import { toast } from 'react-hot-toast'
import { chaptersAtomsAtom, removeChapterAtom } from '@/atoms/chapterAtom'


export const Upload = () => {
  const [submitting, setSubmitting] = useState(false)
  const [accordionValue, setAccordionValue] = useState("item-1")
  const [chaptersAtoms, addChapter] = useAtom(chaptersAtomsAtom)
  const frontMatter = useAtomValue(frontMatterAtom)
  const removeChapter = useSetAtom(removeChapterAtom)


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
    removeChapter(index - 1)

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

            {chaptersAtoms.map((chapterAtom, idx) => (
              <ChapterUpload
                atom={chapterAtom}
                onDelete={chapterDeleted}
                key={idx}
                index={idx + 1}
              />
            ))}

            <div className="flex justify-center mt-4">
              <Button
                onClick={() => addChapter({})}
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