import { createLazyFileRoute} from '@tanstack/react-router'
import { useAccount } from 'wagmi'
import { useUsername } from '@/hooks/useUsername'
import { useRef, useState } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { UploadSidebar } from '@/components/Sidebars/uploadSidebar'
import { UploadCover } from '@/components/Upload/Cover'
import { UploadIntro } from '@/components/Upload/Intro'
import ChapterUpload from '@/components/Upload/ChapterUpload'
import { UploadPermissions } from '@/components/Upload/Permissions'
import { UploadTitle } from '@/components/Upload/Title'
import { Button } from '@/components/ui/button'
import { CompletionNFT } from '@/components/Upload/Completion'

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
    if (error) return <h1>{error}</h1>
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

    return (
      <SidebarProvider>
        <UploadSidebar />
        <SidebarTrigger />
        <main className="flex-1 mt-12 w-screen mb-8">
          <div className="space-y-4 mx-auto w-2/3">
            <div id="upload-cover" className="scroll-mt-12">
              <UploadCover />
            </div>
            <div id="book-title" className="scroll-mt-12">
              <UploadTitle />
            </div>
            <div id="book-intro" className="scroll-mt-12">
              <UploadIntro />
            </div>
            <div id="chapters" className="scroll-mt-12">
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
            <div id="completion" className="scroll-mt-12">
              <CompletionNFT />
            </div>
            <div id="permissions" className="scroll-mt-12">
              <UploadPermissions />
            </div>
          </div>
        </main>
      </SidebarProvider>
    )
  },
})
