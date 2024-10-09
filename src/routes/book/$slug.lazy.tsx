import { useState } from'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import Chapters from '../../components/chapters'
import Content from '../../components/content'
import Reward from '../../components/reward'
import playbooks from '../../playbooks.json'
import { toSlug } from '../../components/CarouselItem'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const questChainQueryDocument = gql`
  query ChainDetails($name: String!) {
    questChains(where: {
      name_starts_with_nocase: $name,
      name_ends_with_nocase: $name
    }) {
      description
      imageUrl
      token { imageUrl }
      createdBy { id }
      updatedAt
      quests(orderBy: questId) {
        questId
        name
        description
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

export const Route = createLazyFileRoute('/book/$slug')({
  component: Book,
})

function Book() {
  try {
    const { slug } = Route.useParams()
    const book = (
      playbooks.map(({ books }) => books)
      .flat()
      .find(
        ({ title }) => toSlug(title) === slug
      )
    )

    const {
      data: { questChains: [chain] = [] } = {},
      error,
      isLoading,
    } = (
      useQuery<GraphChainResponse>({
        queryKey: [`chain-${slug}`],
        queryFn: async () => (
          request(
            'https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest',
            questChainQueryDocument,
            { name: book?.title },
          )
        )
      })
    )

    const [active, setActive] = useState(0)
    const [content, setContent] = useState<string | null>(null)
    const [creator, setCreator] = useState('Unknown')
    const chapterSelected = (index: number) => {
      setActive(index)
      switch(index) {
        case 0: {
          setContent(chain.description)
          break
        }
        default: {
          setContent(chain.quests[index - 1].description)
        }
      }
    }
    const passIntro = () => {
      chapterSelected(1)
      document.getElementById('top')?.scrollIntoView()
    }
    if(error) throw error
    if(!book) {
      throw new Error(`No book found for: "${slug}".`)
    }

    if(isLoading) return <h1>Loading…</h1>

    if(!chain) {
      throw new Error(
        `No chain found for: "${slug}" = "${book.title}".`
      )
    }

    const { id: creatorId } = chain.createdBy
    if(!content) chapterSelected(0)
    if(creator === 'Unknown') {
      setCreator(
        `${creatorId.substring(0, 5)}⋯${creatorId.substring(-3)}`
      )
      const client = createPublicClient({
        chain: mainnet,
        transport: http()
      })
      client.getEnsName({ address: creatorId as `0x${string}` })
      .then((name) => { if(name) setCreator(name) })
    }
    return (
      <>
        <div id="top" className="container mx-auto p-20">
          <h2 className="text-sm text-secondary mt-5 text-left pl-1" title={creatorId} onClick={() => navigator.clipboard.writeText(creatorId)}>
            Creator: {creator}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-left mt-2">{book.title}</h1>
          <p className="text-sm text-white text-left pl-1 mt-6 mb-4">
            Last Updated: {new Date(Number(chain.updatedAt) * 1000).toLocaleString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <main className="md:flex justify-start">
            <Chapters {...{ active }} onChange={chapterSelected} chapters={chain.quests.map(({ name }) => name)}/>
            <div>
              <Content {...{ content }}/>
              {active === 0 && (
                <button className='shadow-md rounded-md bg-base-300 p-4 hover:bg-yellow-300/60 text-white text-center' onClick={passIntro}>Continue</button>
              )}
            </div>
            <Reward image={chain.token.imageUrl}/>
          </main>
        </div>
      </>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}
