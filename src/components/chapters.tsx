import { clsx } from 'clsx'

export default function Chapters(
  { onChange, chapters, active }:
  {
    onChange: (index: number) => void
    chapters: Array<string>
    active: number
  }
) {
  if(!chapters) {
    throw new Error('Argument `chapters` is not defined.')
  }

  return (
    <ol id="chapters" className="flex flex-col max-w-72 text-balance mt-4 mr-4">
      {['Introduction', ...chapters].map((chapter, index) => (
        <li key={index} className={clsx('card bg-base-100 shadow-md p-3 hover:bg-yellow-300/60', active === index && 'bg-white/20')} onClick={() => onChange(index)}>
          <h2 className="text-lg font-medium text-left -indent-6 ml-7">
            {active === index ? '✔' : `${index + 1}`}
            {' '}{chapter}
          </h2>
        </li>
      ))}
    </ol>
  )
}
