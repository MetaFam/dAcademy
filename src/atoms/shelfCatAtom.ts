import { atomWithStorage } from 'jotai/utils'

export const shelfCatAtom = (
  atomWithStorage<Array<string>>(
    'shelfCategories', [], undefined, { getOnInit: true }
  )
)
