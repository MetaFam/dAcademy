import { FormEvent, useRef, useState } from "react"
import { NFTTemplate } from "./NFTTemplate"
import { upload } from "#utils"
import toast from 'react-hot-toast'

export const NFTGenerator = ({ isOpen = false }: { isOpen?: boolean }) => {
  const [bg, setBg] = useState<File>()
  const [title, setTitle] = useState<string>()
  const [color, setColor] = useState('#ffffff')
  const svgRef = useRef<SVGSVGElement>()
  const commit = async (evt: FormEvent) => {
    try {
      evt.preventDefault()
      const svg = svgRef.current?.outerHTML
      if(!svg) throw new Error('Could not generate SVG.')
      let cid = null
      await toast.promise(
        upload([new File([new Blob([svg])], 'nft.svg')]),
        {
          loading: 'Uploading SVG to IPFS.',
          success: (res) => {
            cid = res
            return `Uploaded to ipfs://${cid}.`
          },
          error: (error) => error.message,
        }
      )
      console.log({cid})
    } catch(err) {
      toast.error((err as Error).message)
      console.error({ err })
    }
  }
  return (
    <dialog className="z-30" open={isOpen}>
      <form onSubmit={commit}>
        <input onChange={({target: { files }}) => setBg(files?.[0])} type="file" accept="image/*" />
        <input placeholder="title" value={title} onChange={({target: {value}}) => setTitle(value)}/>
        <input type="color" value={color} onChange={({target: {value}}) => setColor(value)}/>
        <NFTTemplate {...{ bg, title, color, svgRef }} />
        <button className="rounded-md btn-md btn mb-6 btn-secondary">Commit</button>
      </form>
    </dialog>
  )
}