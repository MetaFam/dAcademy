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
  sandpackPlugin,
  codeBlockPlugin,
  linkDialogPlugin,
} from '@mdxeditor/editor'

export const MarkdownEditor = (
  { markdown = '', onChange, className, ...props }:
  {
    markdown?: string
    className?: string
    onChange?: (mark: string) => void
  } = {}
) => (
  <MDXEditor
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
      linkDialogPlugin(),
      thematicBreakPlugin(),
      tablePlugin(),
      imagePlugin(),
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
      sandpackPlugin(),
      markdownShortcutPlugin(),
      toolbarPlugin({
        toolbarContents: () => (
          <>
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
          </>
        )
      }),
    ]}
    {...{ markdown, className, onChange }}
    {...props}
  />
)

export default MarkdownEditor