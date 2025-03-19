import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type NFT = {
  image?: string | null
  name?: string | null
  description?: string | null
}

export const nftAtom = atomWithStorage<NFT>(
  'collectionNFT', {}, undefined, { getOnInit: true }
)

export const imageAtom = atom(
  (get) => get(nftAtom)?.image,
  (_get, set, update: string | null) => (
    set(nftAtom, (prev) => ({ ...prev, image: update }))
  )
)

export const nameAtom = atom(
  (get) => get(nftAtom)?.name,
  (_get, set, update: string | null) => (
    set(nftAtom, (prev) => ({ ...prev, name: update }))
  )
)

export const descriptionAtom = atom(
  (get) => get(nftAtom)?.description,
  (_get, set, update: string | null) => (
    set(nftAtom, (prev) => ({ ...prev, description: update }))
  )
)