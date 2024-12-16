import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type FrontMatter = {
  title?: string | null
  cover?: string | null
  introduction?: string | null
}

export const frontMatterAtom = (
  atomWithStorage<FrontMatter>(
    'frontMatter', {}, undefined, { getOnInit: true }
  )
)

export const coverAtom = atom(
  (get) => get(frontMatterAtom)?.cover,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, cover: update }))
  )
)

export const titleAtom = atom(
  (get) => get(frontMatterAtom)?.title,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, title: update }))
  )
)

export const introAtom = atom(
  (get) => get(frontMatterAtom)?.introduction,
  (_get, set, update: string | null) => (
    set(frontMatterAtom, (prev) => ({ ...prev, introduction: update }))
  )
)