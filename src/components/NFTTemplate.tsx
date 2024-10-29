import React, { useEffect, useState } from "react"

type Point = {x?: number, y?: number}
export const NFTTemplate = ({bg, title}: {bg?: File, title?: string}) => {
  const [background, setBackground] = useState<string | null>()
  const [zoomStart, setZoomStart] = useState<SVGPoint>()
  const [zoomCurrent, setZoomCurrent] = useState<SVGPoint>()
  const [zoomPercent, setZoomPercent] = useState(1)

  useEffect(() => {
    if(bg) {
      const reader = new FileReader()
      reader.onload = () => {
        let {result} = reader
        if(result instanceof ArrayBuffer) {
          result = new String(result) as string
        }
        setBackground(result)
      }
      reader.readAsDataURL(bg)
    }
  }, [bg])
  const screen2ViewBox = (coords: Point) => {
    const svg = document.querySelector('#nft') as SVGSVGElement
    if(svg) {
      const point = svg.createSVGPoint()
      point.x = coords.x ?? 0
      point.y = coords.y ?? 0

      const CTM = svg.getScreenCTM()
      if (CTM) {
          return point.matrixTransform(CTM.inverse())
      }
    }
  }
  const zoomBegin = (evt: React.MouseEvent) => {
    setZoomStart(screen2ViewBox({x: evt.clientX, y: evt.clientY}))
  }
  const zoomEnd = () => {
    setZoomStart(undefined)
  }
  const zoom = (evt: React.MouseEvent) => {
    if(zoomStart) {
      const current = screen2ViewBox({x: evt.clientX, y: evt.clientY})
      setZoomCurrent(current)
      if(current) {
        const delta = (zoomStart.y - current.y) / 200
        setZoomPercent(delta < 0 ? 100 + delta : delta)
      }
    }
  }
  return (
<svg onMouseMove={zoom} onMouseUp={zoomEnd} onMouseDown={zoomBegin} version="1.1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" id="nft">
  <defs>
    {background && <image height={`${zoomPercent * 100}%`} width={`${zoomPercent * 100}%`} id="bg" href={background} />}
    <filter id="blur" colorInterpolationFilters="sRGB">
      <feGaussianBlur stdDeviation="2" />
    </filter>
    <rect id="textBox" x="15%" y="80%" width="70%" height="13%" rx="4%" />
    <clipPath id="textClip">
      <use href="#textBox" />
    </clipPath>
  </defs>
  {background && (
    <g>
      <use height="100%" width="100%" href="#bg" />
    </g>
  )}
  {title && (
    <>
      <use filter="url(#blur)" clipPath="url(#textClip)" href="#bg" height="100%" width="100%"/>
      <use href="#textBox" fill="#fff" fillOpacity=".25" filter="url(#blur)" />
      <text
        x="50%" y="90%" fill="#fff" fontSize="133%"
        stroke="#0005" strokeWidth=".5" textAnchor="middle" style={{fontVariationSettings:`'wdth' 87, 'wght' 500`}}
      >{title}</text>
    </>
  )}

  {zoomStart && zoomCurrent && (
    <g>
      <line x1={zoomStart.x} x2={zoomCurrent.x} y1={zoomStart.y} y2={zoomCurrent.y} stroke="green" strokeDasharray="1 1" />
      <circle cx={zoomCurrent.x} cy={zoomCurrent.y} r="1%" fill="red" />
    </g>
  )}

  {zoomStart && (
    <circle cx={zoomStart.x} cy={zoomStart.y} r="1%" fill="red" />
  )}
</svg>
  )
}