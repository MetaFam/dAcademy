import { atomWithStorage } from 'jotai/utils'

export const categoriesAtom = (
  atomWithStorage<Array<string>>(
    'categories', [], undefined, { getOnInit: true }
  )
)
