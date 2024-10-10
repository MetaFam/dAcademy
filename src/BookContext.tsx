import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { useAccount } from 'wagmi'
import playbooks from './playbooks.json'
import { toSlug } from './components/CarouselItem'

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
        tokenId
        imageUrl
        tokenAddress
      }
      createdBy {
        id
      }
      updatedAt
      quests(orderBy: questId) {
        questId
        name
        description
        optional
        status { status }
      }
    }
  }
`

const userChainProgressQueryDocument = gql`
  query ChainDetails($chain: String!, $user: String!) {
    questStatuses(where: {questChain: $chain, user: $user}, orderBy: quest__questId) {
      status
      quest {
        questId
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
class ChaptersArray extends Array {
  current: Chapter = this[0]
}
type Book = {
  title: string
  introduction: string
  chapters: typeof ChaptersArray
  updatedAt: Date
  contract: string
  nft: {
    id: string
    address: string
  }
  creator: string
  owners: Array<string>
  reader?: string
  on: number
  setOn: (num: number) => void
  setSlug: (slug: string) => void
}
type Chapter = {
  optional: boolean
  title: string
  content: string
  status?: string
}

export type Quest = {
  questId: number
  name: string
  description: string
  optional: boolean
  status: { status: string }
}
export type Chain = {
  id: string
  address: string
  description: string
  imageUrl: string
  token: {
    imageUrl: string
    tokenId: string
    tokenAddress: string
  }
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
  quest: {
   questId: string
   optional: boolean
  }
  submissions: Array<Submission>
}
export type Statuses = {
  questStatuses: Array<Status>
}

type ContextReturn = {
  book?: Book
  error?: Error
  loading: boolean
}
const BookContext = createContext<ContextReturn>({ loading: true })

export const useBook = (slug: string) => {
  const context = useContext(BookContext)
  context.book?.setSlug(slug)
  return context
}

export const BookContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [on, setOn] = useState(0)
  const [slug, setSlug] = useState<string>()
  const book = (
    playbooks
    .map(({ books }) => books)
    .flat()
    .find(({ title }) => toSlug(title) === slug)
  )
  const {
    data: { questChains: [chain] = [] } = {},
    error: questError,
    isLoading: loading,
  } = useQuery<GraphChainResponse>({
    enabled: !!book,
    queryKey: [`chain-${slug}`],
    queryFn: async () =>
      request(
        import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
        questChainQueryDocument,
        { name: book?.title },
      ),
  })

  const account = useAccount()
  const reader = account?.address?.toLowerCase()
  const {
    data: { questStatuses: statuses } = {},
    error: statusesError,
  } = (
    useQuery<Statuses>({
      enabled: !!reader && !!chain?.id,
      queryKey: [`statuses-${chain?.id}-${reader}`],
      queryFn: async () => (
        request(
          import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
          userChainProgressQueryDocument,
          { chain: chain.id, user: reader },
        )
      )
    })
  )

  const chapters = chain.quests.map((quest, index) => {
    const status = statuses?.find(({ quest: { questId } }) => (
      Number(questId) === index
    ))
    return {
      optional: quest.optional,
      title: quest.name,
      content: quest.description,
      status: status?.status,
    }
  })
  chapters.current = chapters[on]
  return (
    <BookContext.Provider value={{
      error: questError ?? statusesError ?? undefined,
      loading,
      book: loading || !book ? undefined : {
        title: book.title,
        introduction: chain.description,
        reader,
        creator: chain.createdBy.id,
        owners: [],
        updatedAt: new Date(Number(chain.updatedAt) * 1000),
        contract: chain.id,
        nft: {
          id: chain.token.tokenId,
          address: chain.token.tokenAddress,
        },
        chapters,
        on,
        setOn,
        setSlug,
      }
    }}/>
  )}

