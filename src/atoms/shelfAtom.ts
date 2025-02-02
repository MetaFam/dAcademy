import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type ShelfFrontMatter = {
  name?: string | null
  shelfCover?: string | null
  description?: string | null
}

export const frontMatterAtom = (
  atomWithStorage<ShelfFrontMatter>(
    'shelfFrontMatter', {}, undefined, { getOnInit: true }
  )
)

export const shelfCoverAtom = atom(
  (get) => get(frontMatterAtom)?.shelfCover,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, shelfCover: update }))
  )
)

export const nameAtom = atom(
  (get) => get(frontMatterAtom)?.name,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, name: update }))
  )
)

export const descriptionAtom = atom(
  (get) => get(frontMatterAtom)?.description,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, description: update }))
  )
)