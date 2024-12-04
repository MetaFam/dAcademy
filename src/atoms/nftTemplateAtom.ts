import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type NFTTemplate = {
  background?: string | null
  title?: string | null
  color?: string | null
}

export const nftTemplateAtom = atomWithStorage<NFTTemplate>('nftTemplate', {})

export const backgroundAtom = atom(
  (get) => get(nftTemplateAtom)?.background,
  (_get, set, update: string | null) => (
    set(nftTemplateAtom, (prev) => ({ ...prev, background: update }))
  )
)

export const titleAtom = atom(
  (get) => get(nftTemplateAtom)?.title,
  (_get, set, update: string | null) => (
    set(nftTemplateAtom, (prev) => ({ ...prev, title: update }))
  )
)

export const colorAtom = atom(
  (get) => get(nftTemplateAtom)?.color,
  (_get, set, update: string | null) => (
    set(nftTemplateAtom, (prev) => ({ ...prev, color: update }))
  )
)