import { atomWithStorage } from 'jotai/utils'

export type Curator = {
  name?: string
  address?: string
  role?: string
}

export const curatorsAtom = atomWithStorage<Array<Curator>>('curators', [])

