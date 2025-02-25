import { atomWithStorage } from 'jotai/utils'

export type User = {
  name?: string
  address?: string
  role?: string
}

export const usersAtom = atomWithStorage<Array<User>>('collectionUsers', [])

