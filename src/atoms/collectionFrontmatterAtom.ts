import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type CollectionFrontMatter = {
  name?: string | null
  collectionCover?: string | null
  description?: string | null
}

export const frontMatterAtom = (
  atomWithStorage<CollectionFrontMatter>(
    'collectionFrontMatter', {}, undefined, { getOnInit: true }
  )
)

export const collectionCoverAtom = atom(
  (get) => get(frontMatterAtom)?.collectionCover,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, collectionCover: update }))
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