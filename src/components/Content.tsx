import Markdown from 'react-markdown'
import '../content.css'
import { useLoadedBook } from '../BookContext'
import Submission from './Submission'

export default function Content() {
  const book = useLoadedBook()

  return (
    <section id="content" className="flex-grow">
      <div className="card bg-transparent max-w-prose mt-4 mx-auto">
        <div className="content">
          <Markdown>{book.chapters.active.content}</Markdown>
        </div>
      </div>
      {book.on === 0 ? (
        <button
          onClick={() => book.setOn(book.on + 1)}
          className="shadow-md rounded-md bg-base-300 p-4 hover:bg-yellow-300/60 text-white text-center"
        >
          Continue
        </button>
      ) : (
        (['pass'].includes(book.chapters.active.status)) ? (
          <div role="alert" className="alert alert-success flex items-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="grow">You have already successfully completed this submission.</h2>
            {book.on < book.chapters.length - 1 && (
              <button onClick={() => book.setOn(book.on + 1)} className="btn btn-primary text-fg font-bold self-end">
                Next <span className="size-2xl">→</span>
              </button>
            )}
          </div>
        ) : (
          <Submission/>
        )
      )}
    </section>
  )
}