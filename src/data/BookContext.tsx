import { createContext, ReactNode, useContext, useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { useAccount } from 'wagmi'
import playbooks from './playbooks.json'
import { toSlug } from '@/components/CarouselItem'

const questChainQueryDocument = gql`
  query ChainDetails($name: String!, $reader: String) {
    questChains(
      where: {
        name_starts_with_nocase: $name,
        name_ends_with_nocase: $name
      }
    ) {
      id
      address
      description
      imageUrl
      token {
        tokenId
        imageUrl
        tokenAddress
        owners(where: { id: $reader }) {
          id
        }
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
    questStatuses(where: {
      questChain: $chain, user: $user
    }, orderBy: quest__questId) {
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

export class ChaptersArray<T> extends Array {
  current = 0

  constructor(...items: Array<T>) {
    super()
    this.push(...items)
  }

  get active() {
    return this[this.current]
  }
}

export type Book = {
  status: 'auth'

  slug: string
  title: string
  introduction: string
  chapters: ChaptersArray<Chapter>
  updatedAt: Date
  contract: string
  nft: {
    id: number
    address: string
    image: string
    minted: boolean
  }
  creator: string
  owners: Array<string>
  reader: string
  on: number
  setOn: (num: number) => void
}
export type UnauthedBook = {
  status: 'load'
  chapters: ChaptersArray<UnauthedChapter>
  reader: null
} & Omit<BareBook, 'chapters' | 'reader'>
export type UnloadedBook = {
  status: 'init'
  slug: string
  title: string
}
export type BookError = {
  status: 'error'
  error: Error
}
export type BareBook = (
  Omit<Book, 'status'>
)
export type BookOptions = (
  Book | UnauthedBook | UnloadedBook | BookError
)

export type Chapter = {
  optional: boolean
  title: string
  content: string
  status: ChapterStatus
}
export type UnauthedChapter = {
  status: 'init' | null
} & Omit<Chapter, 'status'>
export type ChapterStatus = 'init' | 'pass' | 'fail' | 'review'

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
    owners: Array<{ id: string }>
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

export const BookContext = (
  createContext<BookOptions | null>(null)
)

export const useBook = () => (
  useContext(BookContext)
)
export const useLoadedBook = () => {
  const book = useBook()

  if(!book) throw new Error('No book.')
  if(book.status === 'error') throw book.error
  if(book.status === 'init') {
    throw new Error(`Loading Book: "${book.title}".`)
  }

  return book
}

export const BookProvider = (
  { slug, children, chapter=0 }:
  { slug: string, children: ReactNode, chapter?: number }
) => {
  const [on, setOn] = useState(chapter)

  const { title } = (
    playbooks
    .map(({ books }) => books)
    .flat()
    .find(({ title }) => toSlug(title) === slug)
  ) ?? {}
  if(!title) throw new Error(`Book "${slug}" not found.`)

  const account = useAccount()
  const reader = account?.address?.toLowerCase() ?? null
  const {
    data: { questChains: [chain] = [] } = {},
    error: questError,
    isLoading: questLoading,
  } = useSuspenseQuery<GraphChainResponse>({
    queryKey: [`chain-${slug}`],
    queryFn: async () => request(
      import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
      questChainQueryDocument,
      { name: title, reader },
    ),
  })


  const {
    data,
    error: statusesError,
  } = (
    useSuspenseQuery<Statuses | null>({
      queryKey: [`statuses-${chain?.id}-${reader}`],
      queryFn: async () => {
        if(!reader || !chain?.id) {
          return null
        }
        return request(
          import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
          userChainProgressQueryDocument,
          { chain: chain.id, user: reader },
        )
      },
    })
  )
  const { questStatuses: statuses } = data ?? {}

  let book = null
  const error = questError ?? statusesError
  if(!!error) {
    book = { status: 'error' as const, error }
  } else if(questLoading) {
    book = { status: 'init' as const, slug, title }
  } else {
    const chapters = (() => (
      new ChaptersArray(...[
        {
          optional: true,
          title: 'Introduction',
          content: chain.description,
          status: 'init',
        },
        ...chain.quests.map((quest, index) => {
          const status = statuses?.find(
            ({ quest: { questId } }) => (
              Number(questId) === index
            )
          )
          return {
            optional: quest.optional,
            title: quest.name,
            content: quest.description,
            status: status?.status ?? null,
          }
        }),
      ])
    ))()
    chapters.current = on

    const props = {
      slug,
      title,
      introduction: chain.description,
      chapters,
      creator: chain.createdBy.id,
      owners: [], // ToDo: Extract from The Graph
      updatedAt: new Date(Number(chain.updatedAt) * 1000),
      contract: chain.id,
      nft: {
        id: Number(chain.token.tokenId),
        address: chain.token.tokenAddress,
        image: chain.token.imageUrl,
        minted: chain.token.owners.length > 0,
      },
      on,
      setOn,
    }

    if(reader === null) {
      book = { status: 'load' as const, ...props, reader }
    } else {
      book = { status: 'auth' as const, ...props, reader }
    }
  }

  return (
    <BookContext.Provider value={book}>
      {children}
    </BookContext.Provider>
  )
}