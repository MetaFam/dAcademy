import { createLazyFileRoute } from '@tanstack/react-router'
import { useAccount } from 'wagmi'
import { useUsername } from '@/hooks/useUsername'
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
import { useAtom, useAtomValue } from 'jotai'
import { uploadTriggerAtom, coverCIDAtom, bookTitleAtom, bookIntroAtom } from '@/atoms'

export const Route = createLazyFileRoute('/upload/')({
  component: () => {
    const { address } = useAccount()
    const { error } = useUsername(address)
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
    const [uploadTrigger, setUploadTrigger] = useAtom(uploadTriggerAtom)
    const coverCID = useAtomValue(coverCIDAtom)
    const bookTitle = useAtomValue(bookTitleAtom)
    const bookIntro = useAtomValue(bookIntroAtom)

    if (error) return <h1>{error}</h1>
    console.log({coverCID, uploadTrigger})

    if (coverCID) {
      if(!bookTitle) {
      //   setUploadTrigger({ cover: false, title: true, intro: false })
      // } else if(!bookIntro) {
      //   setUploadTrigger({ cover: false, title: false, intro: true })
      //   console.log({coverCID, bookTitle})
      // } else {
      //   setUploadTrigger({ cover: false, title: false, intro: false })

        console.log({coverCID, bookTitle, bookIntro})
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
            <Button onClick={() => {console.log('settingToCover')
              setUploadTrigger(true)
            }} className="block mx-auto">Submit</Button>
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
  },
})