import { useEffect, useRef } from 'react'
import { NFTTemplate } from './NFTTemplate'
import { toDataURL} from '@/lib/utils'
import { useAtom, useSetAtom } from 'jotai'
import { descriptionAtom, imageAtom, nameAtom } from '@/atoms/nftAtom'
import { Label } from '../ui/label'
import { FolderUp } from 'lucide-react'
import { backgroundAtom, colorAtom, titleAtom } from '@/atoms/nftTemplateAtom'
import TextInput from './TextInput'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import MarkdownEditor from '../MarkdownEditor'
import { type MDXEditorMethods } from '@mdxeditor/editor'

export const NFTGenerator = () => {
  const [bg, setBg] = useAtom(backgroundAtom)
  const [title, setTitle] = useAtom(titleAtom)
  const [color, setColor] = useAtom(colorAtom)
  const svgRef = useRef<SVGSVGElement>()
  const setImage = useSetAtom(imageAtom)
  const [name, setName] = useAtom(nameAtom)
  const [description, setDescription] = (
    useAtom(descriptionAtom)
  )
  const editorRef = useRef<MDXEditorMethods>(null)

  useEffect(() => {
    const svg = svgRef.current?.outerHTML
    if(!svg) throw new Error('Could not generate SVG.')
    const file = new File([new Blob([svg])], 'nft.svg')
    toDataURL(file, setImage)
  }, [title, color, bg])

  return (
    <section className="relative" id="img-config">
      <div className="flex justify-end flex-col gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">
              Name
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <TextInput
              placeholder="Name"
              value={name ?? ''}
              onChange={({ target: { value } }) => setName(value)}
            />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">
              Description
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center flex justify-center">
            <MarkdownEditor {...{ editorRef }}
              markdown={description ?? ''}
              className="dark-theme dark-editor content"
              onChange={() => {
                setDescription(
                  editorRef.current?.getMarkdown() ?? '',
                )
              }}
            />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">
              Overlay
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="flex justify-center gap-10">
              <TextInput
                placeholder="Title"
                value={title ?? ''}
                onChange={({ target: { value } }) => setTitle(value)}
              />
              <Label className="flex items-center">
                <span className="mr-1">Text Color:</span>
                <input
                  type="color"
                  value={color ?? ''}
                  onChange={({ target: { value } }) => setColor(value)}
                />
              </Label>
            </div>
            <Label className="block max-w-lg mx-auto relative">
              {!bg && (
                <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-24 mt-8">
                  <FolderUp size={48}/>
                  <h3>Upload NFT Image</h3>
                </div>
              )}
              <NFTTemplate {...{ bg, title, color, svgRef }} />
              <input
                onChange={({target: { files }}) => {
                  toDataURL(files?.[0], setBg)
                }}
                type="file"
                accept="image/*"
                className="hidden"
              />
            </Label>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}