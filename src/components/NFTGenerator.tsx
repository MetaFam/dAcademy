import { FormEvent, useEffect, useRef, useState } from "react"
import { NFTTemplate } from "./NFTTemplate"
import { upload as uploadToIPFS } from "#utils"
import toast from 'react-hot-toast'

export const NFTGenerator = (
  { isOpen = false, onClose = null, onSubmit = null, upload = false }:
  {
    isOpen?: boolean
    onClose?: (() => void) | null
    onSubmit?: ((url: string) => void) | null
    upload?: boolean
  }
) => {
  const [bg, setBg] = useState<File>()
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('#ffffff')
  const svgRef = useRef<SVGSVGElement>()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const commit = async (evt: FormEvent) => {
    try {
      console.debug({ title, color })
      evt.preventDefault()
      const svg = svgRef.current?.outerHTML
      if(!svg) throw new Error('Could not generate SVG.')
      const file = new File([new Blob([svg])], 'nft.svg')
      console.debug({ file })
      if(!upload) {
        onSubmit?.(URL.createObjectURL(file))
      } else {
        let cid = null
        await toast.promise(
          uploadToIPFS([file]),
          {
            loading: 'Uploading SVG to IPFS.',
            success: (res) => {
              cid = res
              return `Uploaded to ipfs://${cid}.`
            },
            error: (error) => error.message,
          }
        )
        if(cid) onSubmit?.(cid)
      }
      onClose?.()
    } catch(err) {
      toast.error((err as Error).message)
      console.error({ err })
    }
  }

  useEffect(() => {
    console.debug({ isOpen })
    if(isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className="z-30 fixed inset-0">
      <form onSubmit={commit}>
        <div className="flex justify-end">
          <input onChange={({target: { files }}) => setBg(files?.[0])} type="file" accept="image/*" />
          <input placeholder="title" value={title} onChange={({target: {value}}) => setTitle(value)}/>
          <input type="color" value={color} onChange={({target: {value}}) => setColor(value)}/>
        </div>
        <NFTTemplate {...{ bg, title, color, svgRef }} />,
        <div className="flex justify-evenly">
          {onClose && (
            <button
              type="button"
              className="rounded-md btn-md btn mb-6 bg-red-500 hover:bg-red-800"
              onClick={() => onClose()}
            >Cancel</button>
          )}
          <button
            className="rounded-md btn-md btn mb-6 btn-secondary mr-4"
          >Commit</button>
        </div>
      </form>
    </dialog>
  )
}