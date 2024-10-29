import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useAccount } from 'wagmi'
import ChapterUpload from '#components/upload/ChapterUpload.tsx'
import Top from '#components/Top'
import { useUsername } from '#hooks/useUsername'
import CoverUpload from '#components/upload/CoverUpload.tsx'
import { useRef, useState } from 'react'


export const Route = createLazyFileRoute('/upload/')({
  component: () => {
    const { address } = useAccount()
    const { ens, error } = useUsername(address)
    const [chapterCount, setChapterCount] = (
      useState((() => {
        let count = 0
        while(localStorage.getItem(`chapter.${count}.title`) != null) {
          count++
        }
        return Math.max(2, count)
      })())
    )
    const reloadCallbacks = useRef<Array<() => void>>([])
    if (error) return <h1>{error}</h1>
    const chapterDeleted = (index: number) => {
      console.group('looping')
      for(let idx = index; idx < chapterCount - 1; idx++) {
        console.log({idx, chapterCount})
        localStorage.setItem(
          `chapter.${idx}.title`,
          localStorage.getItem(`chapter.${idx + 1}.title`) ?? ''
        )
        localStorage.setItem(
          `chapter.${idx}.content`,
          localStorage.getItem(`chapter.${idx + 1}.content`) ?? ''
        )
        reloadCallbacks.current[idx].call(reloadCallbacks.current[idx])
      }
      console.groupEnd()
      if(chapterCount > 2) {
        localStorage.removeItem(`chapter.${chapterCount - 1}.title`)
        localStorage.removeItem(`chapter.${chapterCount - 1}.content`)
        setChapterCount(chapterCount - 1)
      } else {
        localStorage.setItem(`chapter.${chapterCount - 1}.title`, '')
        localStorage.setItem(`chapter.${chapterCount - 1}.content`, '')
      }

      reloadCallbacks.current[chapterCount - 1].call(reloadCallbacks.current[chapterCount - 1])
    }
    const reloadCallback = (index: number, listener: () => void) => {
      reloadCallbacks.current[index] = listener
    }

    return (
      <div>
        <h1
          id="top"
          className="text-2xl font-semibold text-secondary mt-12 mb-8 scroll-m-24"
        >
          Upload Hub
        </h1>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start md:px-8">
            <div
              id="book-cover"
              className="mt-4 mb-4 w-full bg-secondary/25 scroll-m-24"
            >
              <h1 className="mt-2">Select Cover</h1>
              <CoverUpload />
            </div>
            <ChapterUpload
              index={0}
              header='Book'
              contentHeader='Introduction'
            />

            {Array.from({ length: chapterCount - 1 }, (_, index) => (
               <ChapterUpload {...{reloadCallback}} onDelete={chapterDeleted} key={index} index={index + 1} />
            ))}
            <button onClick={() => setChapterCount(chapterCount + 1)} className="btn btn-md rounded-md btn-secondary">Add Chapter</button>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-xs btn-secondary border border-primary drawer-button lg:hidden fixed left-0 mt-40 z-10"
            >
              ⇒
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content w-80 p-4 mt-28 z-20">
              <h1 className="mt-4 mb-4 text-lg font-secondary">{ens}</h1>
              <li>
                <Link to={'#book-cover' as '/'}>Upload Cover</Link>
              </li>
              <li>
                <Link to={'#book-title' as '/'}>Book Title</Link>
              </li>
              <li>
                <Link to={'#introduction' as '/'}>Book Introduction</Link>
              </li>
              <li>
                <Link to={'#chapters' as '/'}>Chapters</Link>
              </li>
              <li>
                <a>Owner Permissions</a>
              </li>
            </ul>
          </div>
        </div>
        <Top />
      </div>
    )
  },
})
