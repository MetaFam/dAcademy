import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  MDXEditor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
  tablePlugin,
  imagePlugin,
  Separator,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  ConditionalContents,
  ShowSandpackInfo,
  codeMirrorPlugin,
  codeBlockPlugin,
  linkDialogPlugin,
  MDXEditorMethods,
  MDXEditorProps,
} from '@mdxeditor/editor'
import { ForwardedRef } from 'react'
import { upload } from '../utils'

export const MarkdownEditor = (
  { editorRef = null, ...props }:
  { editorRef?: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps
) => (
  <MDXEditor
    ref={editorRef}
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
      linkDialogPlugin(),
      thematicBreakPlugin(),
      tablePlugin(),
      imagePlugin({
        imageUploadHandler: async (image: File) => {
          const cid = await upload([image])
          return `https://w3s.link/ipfs/${cid}/${image.name}`
        },
      }),

      diffSourcePlugin(),
      codeMirrorPlugin({
        codeBlockLanguages: {
          c: 'C',
          cplusplus: 'C++',
          csharp: 'C#',
          css: 'CSS',
          erlang: 'Erlang',
          go: 'Go',
          groovy: 'Groovy',
          haskell: 'Haskell',
          html: 'HTML',
          java: 'Java',
          js: 'Javascript',
          lua: 'Lua',
          python: 'Python',
          r: 'R',
          ruby: 'Ruby',
          sass: 'SASS',
          scala: 'Scala',
          smalltalk: 'Smalltalk',
          sql: 'SQL',
          ts: 'Typescript',
          txt: 'Text'
        },
      }),
      markdownShortcutPlugin(),
      toolbarPlugin({
        toolbarContents: () => (
          <section className="flex flex-wrap items-center">
            <BoldItalicUnderlineToggles/>
            <Separator/>
            <BlockTypeSelect/>
            <CodeToggle/>
            <CreateLink/>
            <InsertCodeBlock/>
            <InsertImage/>
            <InsertTable/>
            <InsertThematicBreak/>
            <ListsToggle/>
            <UndoRedo/>
            <DiffSourceToggleWrapper options={['rich-text', 'source']}>
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === 'sandpack',
                    contents: () => <ShowSandpackInfo/>,
                  },
                ]}
              />
            </DiffSourceToggleWrapper>
          </section>
        )
      }),
    ]}
    {...props}
  />
)

export default MarkdownEditor