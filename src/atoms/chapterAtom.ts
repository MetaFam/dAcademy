import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type Chapter = {
  title?: string | null
  content?: string | null
}

export const chapterIdsAtom = (
  atomWithStorage<Array<string>>(
    'chapterIds', [], undefined, { getOnInit: true },
  )
)

export const chaptersAtomsAtom = atom(
  (get) => get(chapterIdsAtom).map((id) => (
    atomWithStorage<Chapter>(
      `chapter-${id}`, {}, undefined, { getOnInit: true },
    )
  )),
  (_get, set, update: Chapter) => {
    const id = crypto.randomUUID()
    const chapterAtom = atomWithStorage(`chapter-${id}`, update)
    set(chapterAtom, update)
    set(chapterIdsAtom, (prev) => [...prev, id])
  }
)

export const removeChapterAtom = atom(
  null,
  (_get, set, update: number) => {
    set(chapterIdsAtom, (prev) => prev.toSpliced(update, 1))
  }
)

export const chaptersAtom = atom(
  (get) => get(chaptersAtomsAtom).map(get)
)