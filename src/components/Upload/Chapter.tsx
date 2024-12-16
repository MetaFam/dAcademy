import React from 'react'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { Atom, useAtom } from 'jotai'
import MarkdownEditor from '@/components/MarkdownEditor'
import { Card, CardContent } from '@/components/ui/card'
import { type Chapter as ChapterType } from '@/atoms/chapterAtom'
import TextInput from './TextInput'
import '@mdxeditor/editor/style.css'
import '@/markdown-editor.css'

type ChapterSetter = (
  ((f: ((c: ChapterType) => ChapterType)) => void)
)

export const Chapter = (
  {index, header, contentHeader, onDelete, atom}:
  {
    index: number
    header?: string
    contentHeader?: string
    onDelete?: (idx: number) => void
    atom: Atom<ChapterType>
  }
) => {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [chapter, setChapter] = useAtom<ChapterType>(atom)

  return (
    <Card className="flex justify-center">
      <CardContent className="text-center">
        <fieldset
          className="relative border border-secondary p-4"
        >
          <legend className="text-left font-bold">
            {header ?? `Chapter #${index}`}
          </legend>
          {!!onDelete && (
            <button
              onClick={() => onDelete(index)}
              className="absolute top-8 right-8"
            >
                🗑️
            </button>
          )}
          <div
            id={`chapter-${index}-title`}
            className="mb-4 bg-secondary/25 scroll-m-24"
          >
            <h2 className="font-bold">Title</h2>
            <TextInput
              onChange={({ target: { value } }) => {
                (setChapter as ChapterSetter)
                ((prev: ChapterType) => ({ ...prev, title: value }))
              }}
              value={chapter.title ?? ''}
              id="title"
              placeholder="Title"
            />
          </div>
          <div
            id={`chapter-${index}-content`}
            className="mt-4 mb-4 bg-secondary/25 scroll-m-24"
          >
            <h2 className="mt-2 font-bold">
              {contentHeader ?? 'Content'}
            </h2>
            <div className="flex justify-center mt-4">
              <MarkdownEditor {...{ editorRef }}
                markdown={chapter.content ?? ''}
                className="dark-theme dark-editor content"
                onChange={() => {
                  (setChapter as ChapterSetter)
                  ((prev) => ({
                    ...prev,
                    content: editorRef.current?.getMarkdown() ?? '',
                  }))
                }}
              />
            </div>
          </div>
        </fieldset>
      </CardContent>
    </Card>
  )
}

export default Chapter