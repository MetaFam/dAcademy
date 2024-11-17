import { MDXEditorMethods } from '@mdxeditor/editor'
import MarkdownEditor from '#components/MarkdownEditor'
import React, { useState } from 'react'
import '@mdxeditor/editor/style.css'
import '#markdown-editor.css'

type Callback = () => void
const ChapterUpload = (
  {index, header, contentHeader, onDelete, reloadCallback}:
  {
    index: number
    header?: string
    contentHeader?: string
    onDelete?: (idx: number) => void
    reloadCallback?: (idx: number, cb: Callback) => void
  }
) => {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [title, setTitle] = useState(localStorage.getItem(`chapter.${index}.title`))

  reloadCallback?.(index, () => {
    setTitle(localStorage.getItem(`chapter.${index}.title`))
    editorRef.current?.setMarkdown(localStorage.getItem(`chapter.${index}.content`) ?? '')
  })

  return (
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
          onChange={(evt) => {
            const {value} = evt.target
            localStorage.setItem(`chapter.${index}.title`, value)
            setTitle(value)
          }}
          value={title ?? ''}
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
          markdown={localStorage.getItem(`chapter.${index}.content`) ?? ''}
          className="dark-theme dark-editor content"
          onChange={() => {
            localStorage.setItem(
              `chapter.${index}.content`,
              editorRef.current?.getMarkdown() ?? '',
            )
          }}
        />
      </div>
    </fieldset>
  )
}

export default ChapterUpload