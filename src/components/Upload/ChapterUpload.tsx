// src/components/Upload/Chapters
import { MDXEditorMethods } from '@mdxeditor/editor'
import MarkdownEditor from '@/components/MarkdownEditor'
import React from 'react'
import '@mdxeditor/editor/style.css'
import '@/markdown-editor.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, useAtom } from 'jotai'
import { Chapter } from '@/atoms/chapterAtom'


type ChapterSetter = (
  ((f: ((c: Chapter) => Chapter)) => void)
)

export const ChapterUpload = (
  {index, header, contentHeader, onDelete, atom}:
  {
    index: number
    header?: string
    contentHeader?: string
    onDelete?: (idx: number) => void
    atom: Atom<Chapter>
  }
) => {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [chapter, setChapter] = useAtom<Chapter>(atom)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Book Chapters</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <fieldset className="relative border border-secondary p-4 w-full">
        <legend className="text-left">{header ?? `Chapter ${index}`}</legend>
        {!!onDelete && (
          <button className="absolute top-8 right-8" onClick={() => onDelete(index)}>🗑️</button>
        )}
        <div
          id={`chapter-${index}-title`}
          className="mb-4 bg-secondary/25 scroll-m-24"
        >
          <h2>Title</h2>
          <input
            onChange={({ target: { value } }) => {
              (setChapter as ChapterSetter)
              ((prev: Chapter) => ({ ...prev, title: value }))
            }}
            value={chapter.title ?? ''}
            id="title"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs my-2"
          />
        </div>
        <div
          id={`chapter-${index}-content`}
          className="mt-4 mb-4 bg-secondary/25 scroll-m-24"
        >
          <h2 className="mt-2">{contentHeader ?? `Chapter ${index} Content`}</h2>
        </div>
        <div className="flex justify-center">
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
      </fieldset>
      </CardContent>
    </Card>
  );
}
export default ChapterUpload