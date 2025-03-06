import { atomWithStorage } from 'jotai/utils'

export type Shelf = {
  cover: string
  name: string
  id: string
  slug: string
}

export const collectionAtom = (
  atomWithStorage<Array<Shelf>>(
    'shelves', [], undefined, { getOnInit: true },
  )
)
