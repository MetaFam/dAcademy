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
import { useBook } from '../../../BookContext

export const Route = createLazyFileRoute('/book/$slug/')({
  component: Book,
})

export function Book() {
  try {
    const { slug } = Route.useParams()
    const book = useBook(slug)
    const [content, setContent] = useState<string>()
    const [creator, setCreator] = useState('Unknown')

    if(!book) {
      return `Loading: ${slug}`
    }
    const chapterSelected = (index: number) => {
      setActive(index)
      switch (index) {
        case 0: {
          setContent(book.introduction)
          break
        }
        default: {
          const { content } = book.chapters?.[book.on ?? 1 - 1]
          setContent(content)
        }
      }
    }
    const passSection = async (index: number) => {
      document.documentElement.scrollIntoView()
      chapterSelected(index + 1)
    }

    if (questError) throw questError
    if (statusesError) throw statusesError

    if (!book) {
      throw new Error(`No book found for: "${slug}".`)
    }

    if (questLoading) return <h1>Loading a Quest…</h1>
    if (statusesLoading) return <h1>Loading Statuses…</h1>

    if (!chain) {
      throw new Error(`No chain found for: "${slug}" = "${book.title}".`)
    }

    const status = statuses?.find(
      ({ quest: { questId } }) => (Number(questId) === active - 1)
    )

    const { id: creatorId } = chain.createdBy
    if (!content) chapterSelected(0)
    if (creator === 'Unknown') {
      setCreator(`${creatorId.substring(0, 5)}⋯${creatorId.slice(-3)}`)
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })
      client
        .getEnsName({ address: creatorId as `0x${string}` })
        .then((name) => {
          if (name) setCreator(name)
        })
    }

    return (
      <>
        <div id="top" className="container mx-auto py-20 px-5">
          <h2
            title="Click to copy the creator's contract address."
            onClick={() => {
              toast.success('Creator’s address copied to clipboard.')
              navigator.clipboard.writeText(creatorId)
            }}
            className="text-sm text-secondary mt-5 text-left pl-1"
          >
            Creator: {creator}
          </h2>
          <h1
            title="Click to copy the Quest Chain contract address."
            onClick={() => {
              navigator.clipboard.writeText(chain.id)
              toast.success('Quest Chain contract address copied to clipboard.')
            }}
            className="text-4xl md:text-6xl font-bold text-left mt-2"
          >
            {book.title}
          </h1>
          <p className="text-sm text-white text-left pl-1 mt-6 mb-4">
            Last Updated:{' '}
            {new Date(Number(chain.updatedAt) * 1000).toLocaleString(
              undefined,
              { day: 'numeric', month: 'long', year: 'numeric' },
            )}
          </p>
          <main className="md:flex justify-start">
            <Chapters
              {...{ active, statuses }}
              onChange={chapterSelected}
              chapters={chain.quests.map(({ name }) => name)}
            />
            <div>
              <Content {...{ content }} />
              {active === 0 ? (
                <button
                  onClick={() => passSection(active)}
                  className="shadow-md rounded-md bg-base-300 p-4 hover:bg-yellow-300/60 text-white text-center"
                >
                  Continue
                  </button>
              ) : (
                (!!status && ['pass'].includes(status?.status)) ? (
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
                    {active < chain.quests.length && (
                      <button onClick={() => passSection(active)} className="btn btn-primary text-fg font-bold self-end">
                        Next <span className="size-2xl">→</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <Submission contract={chain.address} index={active - 1}/>
                )
              )}
            </div>
            <Reward image={chain.token.imageUrl} />
          </main>
        </div>
      </>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}
