import { useState } from "react"

export default function Chapters(
  { onChange, chapters }:
  { onChange: (index: number) => void, chapters: Array<string> }
) {
  const [active, setActive] = useState(0)

  if(!chapters) {
    throw new Error('Argument `chapters` is not defined.')
  }

  const onClick = (index) => {
    setActive(index)
    onChange(index)
  }

  return (
    <ol id="chapters" className="flex flex-col max-w-72 text-balance mt-4 mr-4">
      {['Introduction', ...chapters].map((chapter, index) => (
        <li key={index} className="card bg-base-100 shadow-md p-3" onClick={() => onClick(index)}>
          <h2 className="text-lg font-medium text-left -indent-6 ml-7">
            {active === index ? '✔' : `${index + 1}`}
            {' '}{chapter}
          </h2>
        </li>
      ))}
    </ol>
  )
}
