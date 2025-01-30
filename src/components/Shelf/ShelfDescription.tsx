import React from 'react'
import { useAtom } from 'jotai'
import { type MDXEditorMethods } from '@mdxeditor/editor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { introAtom } from '@/atoms/frontMatterAtom'
import MarkdownEditor from '../MarkdownEditor'

export function ShelfDescription() {
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [intro, setIntro] = useAtom(introAtom) //or make a description atom?

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Description</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex justify-center">
        <MarkdownEditor {...{ editorRef }}
          markdown={intro ?? ''}
          className="dark-theme dark-editor content"
          onChange={() => {
            setIntro(editorRef.current?.getMarkdown() ?? '')
          }}
        />
      </CardContent>
    </Card>
  );
}