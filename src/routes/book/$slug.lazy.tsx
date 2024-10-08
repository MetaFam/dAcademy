import { useState } from'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import Chapters from '../../components/chapters'
import Content from '../../components/content'
import Reward from '../../components/reward'
import playbooks from '../../playbooks.json'
import { toSlug } from '../../components/CarouselItem'

const questChainQueryDocument = gql`
  query ChainDetails($name: String!) {
    questChains(where: {
      name_starts_with_nocase: $name,
      name_ends_with_nocase: $name
    }) {
      description
      imageUrl
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
  quests: Array<Quest>
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

    const [_content, setContent] = useState('');
    const [activeQuest, setActiveQuest] = useState(1);
    const chapterSelected = (index: number) => {
      setActiveQuest(index + 1);
      switch (index) {
        case 0:
          setContent('Content for Quest 1');
          break;
        case 1:
          setContent('Content for Quest 2');
          break;
        case 2:
          setContent('Content for Quest 3');
          break;
        default:
          setContent('');
      }
    }

    if(error) throw error
    if(!book) {
      throw new Error(`No book found for: "${slug}".`)
    }
    if(!chain) {
      throw new Error(
        `No chain found for: "${slug}" = "${book.title}".`
      )
    }

    if(isLoading) return <h1>Loading…</h1>

    return (
      <>
        <div className="container mx-auto p-20">
          <p className="text-sm text-secondary mt-5 text-left pl-1">Author Wallet: 0x1234567890abcdef</p>
          <h1 className="text-4xl md:text-6xl font-bold text-left mt-2">{book.title}</h1>
          <p className="text-sm text-white text-left pl-1 mt-6 mb-4">Last updated: insert date</p>
          <main className="md:flex justify-start">
            <Chapters onChange={chapterSelected} active={activeQuest}/>
            <Content content={chain.description} active={activeQuest}/>
            <Reward />
          </main>
        </div>
      </>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}