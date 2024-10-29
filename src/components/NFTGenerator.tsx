import { useState } from "react"
import { NFTTemplate } from "./NFTTemplate"

export const NFTGenerator = () => {
  const [bg, setBg] = useState<File>()
  const [title, setTitle] = useState<string>()

  return (
    <dialog open={true}>
      <input onChange={({target: { files }}) => setBg(files?.[0])} type="file" accept="image/*" />
      <input placeholder="title" value={title} onChange={({target: {value}}) => setTitle(value)}/>
      <NFTTemplate {...{bg, title}} />
    </dialog>
  )
}