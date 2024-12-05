import { useEffect, useRef } from "react"
import { NFTTemplate } from "./NFTTemplate"
import { toDataURL} from "@/lib/utils"
import { useAtom, useSetAtom } from "jotai"
import { descriptionAtom, imageAtom, nameAtom } from "@/atoms/nftAtom"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { FolderUp } from "lucide-react"
import { backgroundAtom, colorAtom, titleAtom } from "@/atoms/nftTemplateAtom"

export const NFTGenerator = () => {
  const [bg, setBg] = useAtom(backgroundAtom)
  const [title, setTitle] = useAtom(titleAtom)
  const [color, setColor] = useAtom(colorAtom)
  const svgRef = useRef<SVGSVGElement>()
  const setImage = useSetAtom(imageAtom)
  const [name, setName] = useAtom(nameAtom)
  const [description, setDescription] = useAtom(descriptionAtom)


  useEffect(() => {
    const svg = svgRef.current?.outerHTML
    if(!svg) throw new Error('Could not generate SVG.')
    const file = new File([new Blob([svg])], 'nft.svg')
    toDataURL(file, setImage)
  }, [title, color, bg])

  return (
    <form className="relative" id="img-config">
      <div className="flex justify-end flex-col gap-4">
        <input placeholder="Name" value={name ?? ''} onChange={({target: {value}}) => setName(value)}/>
        <Textarea placeholder="Description" value={description ?? ''} onChange={({target: {value}}) => setDescription(value)}/>
        <div className="flex flex-wrap justify-between mb-8">
          <input placeholder="Title" value={title ?? ''} onChange={({target: {value}}) => setTitle(value)}/>
          <Label>
            <span className="mr-1">Text Color:</span>
            <input type="color" value={color ?? ''} onChange={({target: {value}}) => setColor(value)}/>
          </Label>
        </div>
      </div>
      <Label className="">
        {!bg && (
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 mt-8">
            <FolderUp size={48}/>
            <h3>Upload NFT Image</h3>
          </div>
        )}
        <NFTTemplate {...{ bg, title, color, svgRef }} />
        <input className="hidden" onChange={({target: { files }}) => toDataURL(files?.[0], setBg)} type="file" accept="image/*" />
      </Label>
    </form>
  )
}