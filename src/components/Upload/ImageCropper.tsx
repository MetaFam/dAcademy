import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
} from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'
import { upload } from '@/lib/utils'
import { uploadTriggerAtom, coverCIDAtom } from '@/atoms'
import { useAtom } from 'jotai'
import { Button } from '@/components/ui/button'

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function App({ image }: { image?:string }) {
  const [imgSrc, setImgSrc] = useState(image)
  const imgRef = useRef<HTMLImageElement>(null)
  const [blobURL, setBlobURL] = useState<string | null>(localStorage.getItem('cover'))
  const [crop, setCrop] = useState<Crop>()
  const aspect = { width: 320, height: 480 }
  const [uploadTrigger] = useAtom(uploadTriggerAtom)
  const [, setCoverCID] = useAtom(coverCIDAtom)


  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setBlobURL(null)
      setCrop(undefined)
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect.width / aspect.height))
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current
    if (!image || !crop) {
      throw new Error('Crop canvas does not exist.')
    }


    const offscreen = document.createElement('canvas')
    offscreen.width = aspect.width
    offscreen.height = aspect.height
    const ctx = offscreen.getContext('2d')
    if(!ctx) throw new Error('No 2d context')

    if(crop.unit === 'px') {
      crop.x = (crop.x / image.width) * 100
      crop.y = (crop.y / image.height) * 100
      crop.width = (crop.width / image.width) * 100
      crop.height = (crop.height / image.height) * 100
    }


    ctx.imageSmoothingQuality = 'high'

    const origin = {
      x: image.naturalWidth * (crop.x / 100),
      y: image.naturalHeight * (crop.y / 100),
    }

    ctx.drawImage(
      image,
      origin.x,
      origin.y,
      image.naturalWidth * (crop.width / 100),
      image.naturalHeight * (crop.height / 100),
      0,
      0,
      offscreen.width,
      offscreen.height,
    )

    const output = offscreen.toDataURL('image/jpeg')
    localStorage.setItem('cover', output)
    setBlobURL(output)
  }
  console.log({uploadTrigger, blobURL})

  if(uploadTrigger /*=== 'cover'*/) {
    if(!blobURL) throw new Error('missing blob')
    fetch(blobURL)
    .then((res) => {console.log({res}); return res.blob()})
    .then((blob) => {console.log({blob}); return upload([new File([blob], 'cover.jpg')])})
    .then((cid) => {console.log({cid}); return setCoverCID(cid)})
  }


  return (
    <div className="">
      <div className="Crop-Controls">
        <label className="flex justify-center mt-4 tooltip" data-tip={!!blobURL ? 'Click to change image.' : null}>
          {blobURL && (
            <img src={blobURL} alt="Crop Preview" className="max-h-[50vh]"/>
          )}
          {!image && (
            <input type="file" accept="image/*" onChange={onSelectFile} className={clsx(!!blobURL && 'hidden', 'file-input file-input-bordered w-full max-w-xs')} />
          )}
        </label>
      </div>

      {!!imgSrc && !blobURL && (
        <ReactCrop
          crop={crop}
          onChange={(c) => setCrop(c)}
          aspect={aspect.width / aspect.height}

          minHeight={100}
          className="max-h-[50vh]"
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!crop && !blobURL && (
        <>
          <div>
            <Button className="rounded-md my-4" onClick={onDownloadCropClick}>Crop</Button>
          </div>
        </>
      )}
    </div>
  )
}