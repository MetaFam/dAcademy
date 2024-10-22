import { createLazyFileRoute, Link } from '@tanstack/react-router'
import ChapterUpload from '#components/upload/UploadChapter'
import Top from '#components/Top'
import { useUsername } from '#hooks/useUsername'


export const Route = createLazyFileRoute('/upload/$user')({
  component: () => {
    const { user } = Route.useParams()
    const { ens, error } = useUsername(user)

    if (error) return <h1>{error}</h1>

    return (
      <div>
        <h1 id="top" className="text-2xl font-semibold text-secondary mt-12 mb-8 scroll-m-24">
          Upload Hub
        </h1>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div
              id="book-cover"
              className="mt-4 mb-4 w-11/12 bg-secondary/25 scroll-m-24"
            >
              <h1 className="mt-2">Upload Cover to IPFS</h1>
              <input
                type="file"
                className="file-input w-full max-w-xs mt-8 mb-8"
              />
              <button className="btn ml-2 rounded-md">Upload</button>
            </div>
            <div
              id="book-title"
              className="mt-4 mb-4 w-11/12 bg-secondary/25 scroll-m-24"
            >
              <h1 className="mt-2">Book Title</h1>
            </div>
            <div
              id="introduction"
              className="mt-4 mb-4 w-11/12 bg-secondary/25 scroll-m-24"
            >
              <h1 className="mt-2">Book Introduction</h1>
            </div>
            <div
              id="chapters"
              className="mt-4 mb-4 w-11/12 bg-secondary/25 flex flex-col h-screen scroll-m-24"
            >
              <h1 className="mt-2">Chapter 1</h1>
              <ChapterUpload />
              <h1 className="mt-2">Add a chapter</h1>
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content w-80 p-4">
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
        <Top/>
      </div>
    )
  },
})
