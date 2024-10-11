import { clsx } from 'clsx'
import { useBook } from '../hooks/useBook'

export default function Chapters() {
  const book = useBook()
  if(!book) {
    throw new Error('Argument `book` is not defined.')
  }

  const { chapters } = book
  if(!chapters) {
    throw new Error('Argument `chapters` is not defined.')
  }

  const { status } = chapters.current

  return (
    <ol
      id="chapters"
      className="flex flex-col max-w-72 text-balance mt-4 mr-4"
    >
      {chapters.map((chapter, index) => {
        let tooltip = (
          (status == null ? (
            'You have not yet submitted a proof for this chapter.'
          ) : (
            `Your submission ${(() => {
              switch(status) {
                case 'pass': return 'has been approved.'
                case 'fail': return 'has been rejected.'
                case 'review': return 'is under review.'
                default: return `has a \`state\` of "${
                  status
                }".`
              }
            })()}`
          ))
        )
        let labelBg = (() => {
          switch(status) {
            case 'pass': return 'fill-green-500'
            case 'fail': return 'fill-red-500'
            case 'review': return 'fill-orange-400'
            case null: case undefined: return 'fill-blue-400'
            default: {
              console.warn(`Unknown \`state\`: "${status}".`)
              return 'fill-blue-600'
            }
          }
        })()
        if(index === 0) {
          tooltip = 'No submission required for this chapter.'
          labelBg = 'fill-yellow-500'
        }

        return (
          <li
            key={index}
            data-tip={tooltip}
            onClick={() => book.setOn?.(index)}
            className={clsx(
              'card tooltip tooltip-top md:tooltip-right shadow-md p-3 hover:bg-yellow-300/75 hover:text-black',
              book.on === index && 'bg-white/20',
              status === 'pass' && 'tooltip-success',
              status === 'fail' && 'tooltip-error',
              status === 'review' && 'tooltip-info',
              status === 'init' && 'tooltip-secondary',
              status == null && 'tooltip-primary',
            )}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-8 h-8 flex-shrink-0 mr-2 self-center"
              >
                <circle
                  cx="50%" cy="50%" r="40%"
                  className={labelBg}
                  stroke={clsx(chapter.optional ? '#A44F' : '#000B')} strokeWidth={8}
                  strokeDasharray={clsx(chapter.optional && '5 15')}
                  strokeLinecap="round"
                  paintOrder="stroke fill"
                />
                <text x="50%" y="57%" fontSize="2.5rem" textAnchor="middle" dominantBaseline="middle" className="fill-black font-bold">{index + 1}</text>
              </svg>
              <h2 className="text-lg font-medium text-left">
                {book.on === 0 ? 'Introduction' : chapter.title}
              </h2>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
