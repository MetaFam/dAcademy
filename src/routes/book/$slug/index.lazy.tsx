import { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { useAccount } from 'wagmi'
import toast from 'react-hot-toast'
import Chapters from '../../../components/Chapters'
import Content from '../../../components/Content'
import Reward from '../../../components/Reward'
import playbooks from '../../../playbooks.json'
import { toSlug } from '../../../components/CarouselItem'
import Submission from '../../../components/Submission'
// import { debug } from '../../../main'
import '@mdxeditor/editor/style.css'
import '../../../markdown-editor.css'

const questChainQueryDocument = gql`
  query ChainDetails($name: String!) {
    questChains(
      where: { name_starts_with_nocase: $name, name_ends_with_nocase: $name }
    ) {
      id
      address
      description
      imageUrl
      token {
        imageUrl
      }
      createdBy {
        id
      }
      updatedAt
      quests(orderBy: questId) {
        questId
        name
        description
      }
    }
  }
`

const userChainProgressQueryDocument = gql`
  query ChainDetails($chain: String!, $user: String!) {
    questStatuses(where: {questChain: $chain, user: $user}, orderBy: quest__questId) {
      status
      quest {
        name
        questId
        optional
        paused
      }
      submissions {
        name
        description
        details
        externalUrl
      }
    }
  }
`

export type Quest = {
  questId: number
  name: string
  description: string
}
export type Chain = {
  id: string
  address: string
  description: string
  imageUrl: string
  token: { imageUrl: string }
  quests: Array<Quest>
  createdBy: { id: string }
  updatedAt: string
}
export type GraphChainResponse = {
  questChains: Array<Chain>
}

export type Submission = {
  name: string
  description: string
  details: string
  externalUrl: string
}
export type Status = {
  status: string
  quest: { questId: string }
  submissions: Array<Submission>
}
export type Statuses = {
  questStatuses: Array<Status>
}

export const Route = createLazyFileRoute('/book/$slug/')({
  component: Book,
})

export function Book() {
  try {
    const { slug } = Route.useParams()
    const book = playbooks
      .map(({ books }) => books)
      .flat()
      .find(({ title }) => toSlug(title) === slug)

    const {
      data: { questChains: [chain] = [] } = {},
      error: questError,
      isLoading: questLoading,
    } = useQuery<GraphChainResponse>({
      queryKey: [`chain-${slug}`],
      queryFn: async () =>
        request(
          import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
          questChainQueryDocument,
          { name: book?.title },
        ),
    })

    const account = useAccount()
    const viewer = account?.address?.toLowerCase()
    const {
      data: { questStatuses: statuses } = {},
      error: statusesError,
      isLoading: statusesLoading,
    } = (
      useQuery<Statuses>({
        enabled: !!viewer && !!chain?.id,
        queryKey: [`statuses-${chain?.id}-${viewer}`],
        queryFn: async () => (
          request(
            import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
            userChainProgressQueryDocument,
            { chain: chain.id, user: viewer },
          )
        )
      })
    )

    const [active, setActive] = useState(0)
    const [content, setContent] = useState<string | null>(null)
    const [creator, setCreator] = useState('Unknown')

    const chapterSelected = (index: number) => {
      setActive(index)
      switch (index) {
        case 0: {
          setContent(chain.description)
          break
        }
        default: {
          setContent(chain.quests[index - 1].description)
        }
      }
    }
    const passSection = (index: number) => {
      chapterSelected(index + 1)
      document.getElementById('root')?.scrollIntoView()
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

    console.debug({ statuses, active, status })

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
                  <h2>You have already successfully completed this submission.</h2>
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
