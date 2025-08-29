import { createContext, ReactNode, useContext, useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { useAccount } from 'wagmi'
import { useSubgraph } from '@/hooks'

const bookQueryDocument = gql`
  query BookDetails($slug: String!, $reader: ID) {
    books(where: { details_: { slug: $slug } }) {
      id
      network
      details {
        name
        description
        image
      }
      address
      token {
        tokenId
        tokenAddress
        details {
          image
        }
        owners(where: { id: $reader }) {
          id
        }
      }
      creator {
        id
      }
      updatedAt
      chapters(orderBy: chapterId) {
        chapterId
        details {
          name
          description
        }
        optional
        status { status }
      }
    }
  }
`

const userBookProgressQueryDocument = gql`
  query BookUserDetails($book: String!, $user: String!) {
    chapterStatuses(where: {
      book: $book, user: $user
    }, orderBy: chapter__chapterId) {
      status
      chapter {
        chapterId
        paused
      }
      submissions {
        details {
          id
          name
          description
          externalURL
        }
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

  chainId: number
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

export type ReturnedChapter = {
  chapterId: number
  details: {
    name: string
    description: string
  }
  optional: boolean
  status: { status: string }
}
export type ReturnedBook = {
  details: {
    name: string
    description: string
    image: string
  }
  id: string
  network: string
  address: string
  token: {
    details: {
      image: string
    }
    tokenId: string
    tokenAddress: string
    owners: Array<{ id: string }>
  }
  chapters: Array<ReturnedChapter>
  creator: { id: string }
  updatedAt: string
}
export type GraphChainResponse = {
  books: Array<ReturnedBook>
}

export type Submission = {
  details: {
    id: string
    name: string
    description: string
    externalURL: string
  }
}
export type Status = {
  status: string
  chapter: {
   chapterId: string
   optional: boolean
  }
  submissions: Array<Submission>
}
export type Statuses = {
  chapterStatuses: Array<Status>
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
    throw new Error(`Loading Book: "${book.slug}".`)
  }

  return book
}

export const BookProvider = (
  { slug, children, chapter = 0 }:
  { slug: string, children: ReactNode, chapter?: number }
) => {
  const [on, setOn] = useState(chapter)
  const subgraph = useSubgraph()
  const account = useAccount()
  const reader = account?.address?.toLowerCase() ?? null
  const {
    data: { books: [returnedBook] = [] } = {},
    error: chapterError,
    isLoading: chapterLoading,
  } = useSuspenseQuery<GraphChainResponse>({
    queryKey: [`book-${slug}`],
    queryFn: async () => request(
      subgraph,
      bookQueryDocument,
      { slug, reader },
    ),
  })

  if(!returnedBook) {
    throw new Error(`No subgraph entry found for "${slug}".`)
  }

  const {
    data,
    error: statusesError,
  } = (
    useSuspenseQuery<Statuses | null>({
      queryKey: [`statuses-${returnedBook?.id}-${reader}`],
      queryFn: async () => {
        if(!reader || !returnedBook?.id) {
          return null
        }
        return request(
          subgraph,
          userBookProgressQueryDocument,
          { book: returnedBook.id, user: reader },
        )
      },
    })
  )
  const { chapterStatuses: statuses } = data ?? {}

  let book = null
  const error = chapterError ?? statusesError
  if(error) {
    book = { status: 'error' as const, error }
  } else if(chapterLoading) {
    book = { status: 'init' as const, slug }
  } else {
    const chapters = (() => (
      new ChaptersArray(...[
        {
          optional: true,
          title: 'Introduction',
          content: returnedBook.details.description,
          status: 'init',
        },
        ...returnedBook.chapters.map((chapter, index) => {
          const status = statuses?.find(
            ({ chapter: { chapterId } }) => (
              Number(chapterId) === index
            )
          )
          return {
            optional: chapter.optional,
            title: chapter.details.name,
            content: chapter.details.description,
            status: status?.status ?? null,
          }
        }),
      ])
    ))()
    chapters.current = on

    const props = {
      chainId: Number(returnedBook.network),
      slug,
      title: returnedBook.details.name,
      introduction: returnedBook.details.description,
      chapters,
      creator: returnedBook.creator.id,
      owners: [], // ToDo: Extract from The Graph
      updatedAt: new Date(Number(returnedBook.updatedAt) * 1000),
      contract: returnedBook.id,
      nft: {
        id: Number(returnedBook.token.tokenId),
        address: returnedBook.token.tokenAddress,
        image: returnedBook.token.details.image,
        minted: returnedBook.token.owners.length > 0,
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