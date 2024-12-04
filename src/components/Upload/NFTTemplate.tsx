import { backgroundAtom } from "@/atoms/nftTemplateAtom"
import { toDataURL } from "@/lib/utils"
import { useAtom } from "jotai"
import React, { useEffect, useState } from "react"

type Point = {x?: number, y?: number}
export const NFTTemplate = ({
  bg, title, color, svgRef
}: {
  bg?: File
  title?: string | null
  color?: string | null
  svgRef: React.MutableRefObject<SVGSVGElement | undefined>
}) => {
  const [background, setBackground] = useAtom(backgroundAtom)
  const [pStart, setPStart] = useState<SVGPoint>()
  const [pCurrent, setPCurrent] = useState<SVGPoint>()
  const [zoomPercent, setZoomPercent] = useState(1)
  const [panning, setPan] = useState<Point>({ x: 0, y: 0 })
  const [mode, setMode] = useState<'zoom' | 'pan' | null>(null)

  useEffect(() => {
    if(!bg) {
      setBackground(null)
    } else {
      toDataURL(bg, setBackground)
    }
  }, [bg])

  const screen2ViewBox = (coords: Point) => {
    const svg = document.querySelector('#nft') as SVGSVGElement
    if(!svg) {
      throw new Error('No SVG element found.')
    }
    const point = svg.createSVGPoint()
    point.x = coords.x ?? 0
    point.y = coords.y ?? 0

    const CTM = svg.getScreenCTM()
    if (CTM) {
      return point.matrixTransform(CTM.inverse())
    } else {
      throw new Error('No screen CTM found.')
    }
  }

  const begin = (evt: React.MouseEvent) => {
    setPStart(screen2ViewBox({x: evt.clientX, y: evt.clientY}))
    if(evt.shiftKey) {
      setMode('pan')
    } else {
      setMode('zoom')
    }
  }

  const end = (evt: React.MouseEvent) => {
    console.debug({ end: evt })
    setPStart(undefined)
    setMode(null)
  }

  const zoom = (current: Point) => {
    if(pStart && current.y != null) {
      const delta = (pStart.y - current.y) / 200
      /* When the button is first depressed, the zoom should be 100%.
        * As the mouse moves up, the zoom should increase to a maximium of 200%.
        * As the mouse moves down, the zoom should decrease to a minimum of 1%.
        */
      console.debug({ per: 1 + delta })
      setZoomPercent(1 + delta)
    }
  }

  const pan = (current: Point) => {
    if(pStart && current.x != null && current.y != null) {
      setPan({ x: current.x - pStart.x, y: current.y - pStart.y })
    }
  }

  const move = (evt: React.MouseEvent) => {
    const current = screen2ViewBox({x: evt.clientX, y: evt.clientY})
    setPCurrent(current)
    switch(mode) {
      case 'zoom': zoom(current); break
      case 'pan': pan(current); break
    }
  }

  return (
    <svg
      ref={svgRef as React.LegacyRef<SVGSVGElement>}
      version="1.1"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="100%" height="100%"
      id="nft"
    >
      <defs>
        {background && (
          <image
            x={panning.x} y={panning.y}
            height={`${zoomPercent * 100}%`} width={`${zoomPercent * 100}%`}
            id="bg"
            href={background}
          />
        )}
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
            x="50%" y="90%" fill={color ?? 'black'} fontSize="133%"
            stroke="#0005" strokeWidth=".5" textAnchor="middle" style={{fontVariationSettings:`'wdth' 87, 'wght' 500`}}
          >{title}</text>
        </>
      )}

      {pStart && pCurrent && (
        <g>
          <line
            x1={pStart.x} x2={pCurrent.x}
            y1={pStart.y} y2={pCurrent.y}
            stroke="green" strokeDasharray="1 1"
          />
          <circle cx={pCurrent.x} cy={pCurrent.y} r="1%" fill="red" />
        </g>
      )}

      {pStart && (
        <circle cx={pStart.x} cy={pStart.y} r="1%" fill="red" />
      )}
    </svg>
  )
}