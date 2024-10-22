import { MDXEditorMethods } from '@mdxeditor/editor'
import MarkdownEditor from '#components/MarkdownEditor'
import React from 'react'
import '@mdxeditor/editor/style.css'
import '#markdown-editor.css'


const ChapterUpload = () => {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  return (
    <>
      <div className="flex justify-center">
        <MarkdownEditor {...{ editorRef }}
        markdown=""
        className="dark-theme dark-editor content mt-4"
        />
      </div>
        <div>
          <button className="btn btn-md rounded-md mt-8">Save Chapter</button>
        </div>
    </>
  )
}

export default ChapterUpload