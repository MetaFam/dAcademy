import { atomWithStorage } from 'jotai/utils'

export type Book = {
  id: string
  name: string
}

export const booksAtom = (
  atomWithStorage<Array<Book>>(
    'books', [], undefined, { getOnInit: true },
  )
)
