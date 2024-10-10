import { clsx } from 'clsx'
import { Status } from '../routes/book/$slug/index.lazy'

export default function Chapters(
  { onChange, chapters, active, statuses }:
  {
    onChange: (index: number) => void
    chapters: Array<string>
    active: number
    statuses?: Array<Status>
  }
) {
  if(!chapters) {
    throw new Error('Argument `chapters` is not defined.')
  }

  return (
    <ol
      id="chapters"
      className="flex flex-col max-w-72 text-balance mt-4 mr-4"
    >
      {['Introduction', ...chapters].map((chapter, index) => {
        const status = statuses?.find(
          ({ quest: { questId } }) => (Number(questId) === index - 1)
        )
        let { status: state } = status ?? {}
        let tooltip = (
          (state == null ? (
            'You have not yet submitted a proof for this chapter.'
          ) : (
            `Your submission ${(() => {
              switch(state) {
                case 'pass': return 'has been approved.'
                case 'fail': return 'has been rejected.'
                case 'review': return 'is under review.'
                default: return `has a \`state\` of "${state}".`
              }
            })()}`
          ))
        )
        if(index === 0) {
          state = 'init'
          tooltip = 'No submission required for this chapter.'
        }
        const labelBg = (() => {
          switch(state) {
            case 'init': return 'fill-yellow-500'
            case 'pass': return 'fill-green-500'
            case 'fail': return 'fill-red-500'
            case 'review': return 'fill-orange-400'
            case null: case undefined: return 'fill-blue-400'
            default: {
              console.warn(`Unknown \`state\`: "${state}".`)
              return 'fill-blue-600'
            }
          }
        })()

        return (
          <li
            key={index}
            data-tip={tooltip}
            onClick={() => onChange(index)}
            className={clsx(
              'card tooltip tooltip-top md:tooltip-right shadow-md p-3 hover:bg-yellow-300/75 hover:text-black',
              active === index && 'bg-white/20',
              state === 'pass' && 'tooltip-success',
              state === 'fail' && 'tooltip-error',
              state === 'review' && 'tooltip-info',
              state === 'init' && 'tooltip-secondary',
              state == null && 'tooltip-primary',
            )}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-8 h-8 flex-shrink-0 mr-2 self-center"
              >
                <circle cx="50%" cy="50%" r="40%" className={labelBg} stroke="#000B" strokeWidth={8} paintOrder="stroke fill"/>
                <text x="50%" y="57%" fontSize="2.5rem" textAnchor="middle" dominantBaseline="middle" className="fill-black font-bold">{index + 1}</text>
              </svg>
              <h2 className="text-lg font-medium text-left">
                {chapter}
              </h2>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
