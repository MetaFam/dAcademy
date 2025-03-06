import React from 'react'
import { useAtom } from 'jotai'
import { type MDXEditorMethods } from '@mdxeditor/editor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { descriptionAtom } from '@/atoms/shelfFrontmatterAtom'
import MarkdownEditor from '../MarkdownEditor'
import '@mdxeditor/editor/style.css'
import '@/markdown-editor.css'

export function ShelfDescription() {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [description, setDescription] = useAtom(descriptionAtom)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Description</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex justify-center">
        <MarkdownEditor {...{ editorRef }}
          markdown={description ?? ''}
          className="dark-theme dark-editor content"
          onChange={() => {
            setDescription(editorRef.current?.getMarkdown() ?? '')
          }}
        />
      </CardContent>
    </Card>
  );
}