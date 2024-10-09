import { gql, request } from 'graphql-request'
import { clsx } from 'clsx'
import { useQuery } from '@tanstack/react-query'

const userChainProgressQueryDocument = gql`
  query ChainDetails($chain: String!, $user: String!) {
    questStatuses(where: {questChain: $chain, user: $user}, orderBy: quest__questId) {
      status
      quest {
        name
        questId
        optional
        paused
      }
      submissions {
        name
        description
        details
        externalUrl
      }
    }
  }
`

export type Submission = {
  name: string
  description: string
  details: string
  externalUrl: string
}
export type Status = {
  status: string
  quest: { questId: string }
  submissions: Array<Submission>
}
export type Statuses = {
  questStatuses: Array<Status>
}

export default function Chapters(
  { onChange, chapters, active, viewer, book }:
  {
    onChange: (index: number) => void
    chapters: Array<string>
    active: number
    viewer?: string // Current user's Ethereum address
    book?: string // Quest Chain's contract address
  }
) {
  const { data: { questStatuses: statuses } = {}, error } = (
    useQuery<Statuses>({
      enabled: !!viewer && !!book,
      queryKey: [`statuses-${book}-${viewer}`],
      queryFn: async () => (
        request(
          import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
          userChainProgressQueryDocument,
          { chain: book, user: viewer },
        )
      )
    })
  )

  console.debug({ viewer, book, statuses })

  if(error) throw error

  if(!chapters) {
    throw new Error('Argument `chapters` is not defined.')
  }

  return (
    <ol id="chapters" className="flex flex-col max-w-72 text-balance mt-4 mr-4">
      {['Introduction', ...chapters].map((chapter, index) => {
        const status = statuses?.find(
          ({ quest: { questId } }) => (Number(questId) === index - 1)
        )
        let { status: state } = status ?? {}
        const [first, ...rest] = chapter.split(/\s+/g)
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

        return (
          <li
            key={index}
            data-tip={tooltip}
            onClick={() => onChange(index)}
            className={clsx(
              'card tooltip tooltip-right bg-base-100 shadow-md p-3 hover:bg-yellow-300/60',
              active === index && 'bg-white/20',
              state === 'pass' && 'tooltip-success',
              state === 'fail' && 'tooltip-error',
              state === 'review' && 'tooltip-info',
              state === 'init' && 'tooltip-secondary',
              state == null && 'tooltip-primary',

            )}
          >
            <h2 className="text-lg font-medium text-left">
              <span className="whitespace-pre">
                <span className={clsx(
                  'inline-block w-8 text-white text-center rounded-full',
                  state === 'init' && 'bg-yellow-500',
                  state === 'pass' && 'bg-green-500',
                  state === 'fail' && 'bg-red-500',
                  state === 'review' && 'bg-orange-400',
                  state == null && 'bg-blue-400',
                )}>
                  {index + 1}
                </span>{' '}{first}
              </span>
              {rest.length > 0 && ' '}
              <span>{rest.join(' ')}</span>
            </h2>
          </li>
        )
      })}
    </ol>
  )
}
