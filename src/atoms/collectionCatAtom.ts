import { atomWithStorage } from 'jotai/utils'

export const collectionCatAtom = (
  atomWithStorage<Array<string>>(
    'collectionCategories', [], undefined, { getOnInit: true }
  )
)
