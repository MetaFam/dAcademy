import { createLazyFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { UploadSidebar, accordionItems} from '@/components/Sidebars/uploadSidebar'
import { Cover } from '@/components/Upload/Cover'
import { Intro } from '@/components/Upload/Intro'
import { Chapter } from '@/components/Upload/Chapter'
import { UploadPermissions } from '@/components/Upload/Permissions'
import { Title } from '@/components/Upload/Title'
import { Button } from '@/components/ui/button'
import { CompletionNFT } from '@/components/Upload/CompletionNFT'
import { UploadPlaybook } from "@/components/Upload/UploadPlaybook"
import { chaptersAtomsAtom, removeChapterAtom } from '@/atoms/chapterAtom'
import { CategoriesInput } from '@/components/Upload/CategoriesInput'

export const Upload = () => {
  const [accordionValue, setAccordionValue] = useState("item-1")
  const [chaptersAtoms, addChapter] = useAtom(chaptersAtomsAtom)
  const removeChapter = useSetAtom(removeChapterAtom)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chapterDeleted = (index: number) => {
    removeChapter(index - 1)
  }

  useEffect(() => {
    const sectionId = accordionItems.find(
      (item) => item.value === accordionValue
    )?.url;
    if(sectionId) {
      const element = document.querySelector(sectionId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [accordionValue, accordionItems])

  return (
    <SidebarProvider>
      <UploadSidebar onAccordionChange={setAccordionValue} />
      <SidebarTrigger />
      <main className="flex-1 mt-12 w-screen mb-8 lg:px-8">
        <form
          id="playbook"
          onSubmit={(evt) => {
            evt.preventDefault()
            setProcessing(true)
          }}
        >
          <div id="upload-cover" className="pt-8 scroll-mt-12">
            <Cover/>
          </div>
          <div id="book-title" className="pt-8 scroll-mt-12">
            <Title/>
          </div>
          <div id="book-intro" className="pt-8 scroll-mt-12">
            <Intro/>
          </div>

          <div
            id="chapters"
            className="mt-12 scroll-mt-12 border shadow rounded-lg"
          >
            <h2 className="text-center text-xl font-bold py-8">Chapters</h2>

            {chaptersAtoms.map((chapterAtom, idx) => (
              <Chapter
                atom={chapterAtom}
                onDelete={chapterDeleted}
                key={idx}
                index={idx + 1}
              />
            ))}

            <div className="flex justify-center mt-4">
              <Button
                onClick={() => addChapter({})}
                type="button"
                className="items-center rounded-md mb-4"
              >
                Add Chapter
              </Button>
            </div>
          </div>
          <div id="completion" className="pt-8 scroll-mt-12">
            <CompletionNFT/>
          </div>
          <div id="cartegories" className="pt-8 scroll-mt-12">
            <CategoriesInput/>
          </div>
        </form>
        <div id="permissions" className="pt-8 scroll-mt-12">
          <UploadPermissions/>
        </div>
        <div className="flex justify-center mt-4">
          <Button form="playbook" className="secondary">
            Create Playbook
          </Button>
        </div>
        {processing && <UploadPlaybook/>}
      </main>
    </SidebarProvider>
  )
}

export const Route = createLazyFileRoute('/upload/')({
  component: Upload,
})