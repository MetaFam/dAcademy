import { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import toast from 'react-hot-toast'
import Chapters from '../../../components/Chapters'
import Content from '../../../components/Content'
import Reward from '../../../components/Reward'
import Submission from '../../../components/Submission'
// import { debug } from '../../../main'
import '@mdxeditor/editor/style.css'
import '../../../markdown-editor.css'
import { useBook } from '../../../hooks/useBook'

export const Route = createLazyFileRoute('/book/$slug/')({
  component: Book,
})

export function Book() {
  try {
    const { slug } = Route.useParams()
    const book = useBook(slug)
    const [creator, setCreator] = useState('Unknown')

    if(book.status === 'init') {
      return `Loading: "${book.title}"…`
    }
    if(book.status === 'error') throw book.error

    const chapterSelected = (index: number) => {
      if(!book.setOn) {
        throw new Error('Book without `setOn`.')
      }
      book.setOn(index)
    }
    const passSection = async (index: number) => {
      document.documentElement.scrollIntoView()
      chapterSelected(index + 1)
    }

    if (creator === 'Unknown') {
      setCreator(`${book.creator.substring(0, 5)}⋯${book.creator.slice(-3)}`)
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })
      ;(
        client
        .getEnsName({ address: book.creator as `0x${string}` })
        .then((name) => { if (name) setCreator(name) })
      )
    }

    return (
      <>
        <div id="top" className="container mx-auto py-20 px-5">
          <h2
            title="Click to copy the creator's contract address."
            onClick={() => {
              toast.success('Creator’s address copied to clipboard.')
              navigator.clipboard.writeText(book.creator)
            }}
            className="text-sm text-secondary mt-5 text-left pl-1"
          >
            Creator: {creator}
          </h2>
          <h1
            title="Click to copy the Quest Chain contract address."
            onClick={() => {
              navigator.clipboard.writeText(book.contract)
              toast.success('Quest Chain contract address copied to clipboard.')
            }}
            className="text-4xl md:text-6xl font-bold text-left mt-2"
          >
            {book.title}
          </h1>
          <p className="text-sm text-white text-left pl-1 mt-6 mb-4">
            Last Updated:{' '}
            {book.updatedAt.toLocaleString(
              undefined,
              { day: 'numeric', month: 'long', year: 'numeric' },
            )}
          </p>
          <main className="md:flex justify-start">
            <Chapters/>
            <div>
              <Content/>
              {book.on === 0 ? (
                <button
                  onClick={() => passSection(book.on)}
                  className="shadow-md rounded-md bg-base-300 p-4 hover:bg-yellow-300/60 text-white text-center"
                >
                  Continue
                </button>
              ) : (
                (['pass'].includes(book.chapters.current.status ?? '')) ? (
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
                    {book.on < book.chapters.length && (
                      <button onClick={() => passSection(book.on)} className="btn btn-primary text-fg font-bold self-end">
                        Next <span className="size-2xl">→</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <Submission/>
                )
              )}
            </div>
            <Reward/>
          </main>
        </div>
      </>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}
