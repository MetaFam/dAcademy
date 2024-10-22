import { createLazyFileRoute } from '@tanstack/react-router'
import ChapterUpload from '#components/upload/UploadChapter'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export const Route = createLazyFileRoute('/upload/')({
  component: () => (
    <div>
      <h1 className="text-2xl font-semibold text-secondary mt-12 mb-8">
        Upload Hub
      </h1>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          <div className="mt-4 mb-4 w-11/12 bg-secondary/25">
            <h1>Upload Cover to IPFS</h1>
          </div>
          <div className="mt-4 mb-4 w-11/12 bg-secondary/25">
            <h1>Book Description</h1>
            <h1>Book Introduction</h1>
          </div>
          <div className="mt-4 mb-4 w-11/12 bg-secondary/25 flex flex-col h-screen">
            <h1>Chapter 1</h1>
            <ChapterUpload/>
            <h1>Add a chapter</h1>
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
            <h1 className="mt-4 mb-4 text-lg font-secondary">
              ENS/Account Info
            </h1>
            <li>
              <a>Upload Cover</a>
            </li>
            <li>
              <a>Book Description</a>
            </li>
            <li>
              <a>Book Introduction</a>
            </li>
            <li>
              <a>Chapters</a>
            </li>
            <li>
              <a>Owner Permissions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
})
