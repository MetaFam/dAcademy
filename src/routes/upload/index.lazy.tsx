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
import { useAtom, useSetAtom } from 'jotai'
// import { frontMatterAtom } from '@/atoms/frontMatterAtom'
import { UploadPlaybook } from "@/components/Upload/UploadPlaybook"
import { chaptersAtomsAtom, removeChapterAtom } from '@/atoms/chapterAtom'


export const Upload = () => {
  // const [submitting, setSubmitting] = useState(false)
  const [accordionValue, setAccordionValue] = useState("item-1")
  const [chaptersAtoms, addChapter] = useAtom(chaptersAtomsAtom)
  // const frontMatter = useAtomValue(frontMatterAtom)
  const removeChapter = useSetAtom(removeChapterAtom)
  const [processing, setProcessing] = useState(false)

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
        <form onSubmit={() => setProcessing(true)}>
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
          <div className="flex justify-center mt-4">
            <Button className="secondary">
              Create Playbook
            </Button>
          </div>
          </form>
        </div>
        {processing && <UploadPlaybook/>}
      </main>
    </SidebarProvider>
  )
}

export const Route = createLazyFileRoute('/upload/')({
  component: Upload,
})