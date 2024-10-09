import { gql, request } from 'graphql-request'
import { clsx } from 'clsx'
import { useQuery } from '@tanstack/react-query'

const userChainProgressQueryDocument = gql`
  query QuestStatusDetails($chain: String!, $user: String!) {
    questStatuses(where: {questChain: $chain, user: $user}, orderBy: quest__questId) {
      status
      quest {
        questId
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
        const approved = status == null ? null : (
          (() => {
            switch(status.status) {
              case 'pass': return true
              case 'fail': return false
              default: {
                console.warn(
                  `Unknown Status for Quest ${index - 1}: ${status.status}`
                )
                return null
              }
            }
          })()
        )
        const [first, ...rest] = chapter.split(/\s+/g)
        return (
          <li
            key={index}
            className={clsx(
              'card bg-base-100 shadow-md p-3 hover:bg-yellow-300/60',
              active === index && 'bg-white/20',
            )}
            onClick={() => onChange(index)}
          >
            <h2 className="text-lg font-medium text-left">
              <span className="whitespace-pre">
                <span className={clsx(
                  'inline-block w-8 text-white text-center rounded-full',
                  approved === true && 'bg-green-500',
                  approved === false && 'bg-red-500',
                  approved == null && 'bg-blue-400',
                )}>
                  {index + 1}
                </span>{' '}{first}
              </span>
              <span>{rest.join(' ')}</span>
            </h2>
          </li>
        )
      })}
    </ol>
  )
}
