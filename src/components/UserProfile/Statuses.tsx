import { useSuspenseQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { request, gql } from "graphql-request"


const submissionsQueryDocument = gql`
query ChainDetails($address: String) {
  proofSubmissions(where: {user: $address}) {
    description
		timestamp
		questChain {
      name
    }
		questStatus {
      status
    }
    quest {
      name
    }
  }
}
`
type Submission =  {
  description: string
  timestamp: number
  questChain: {
    name: string
  }
  questStatus: {
    status: string
  }
  quest: {
    name: string
  }
}

type GraphReturn = {
  proofSubmissions: Array<Submission>
}
const Statuses = ({account}: {account?: string}) => {
  const {
    data: { proofSubmissions }  = {},
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`submissions-${account}`],
    queryFn: async () => request(
      import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
      submissionsQueryDocument,
      { address: account?.toLowerCase() },
    ),
  })
  const submissions = proofSubmissions?.sort((a, b) => {
    if(a.questStatus.status !== b.questStatus.status) {
    const statuses = ['review', 'fail', 'pass']
    return statuses.indexOf(a.questStatus.status) - statuses.indexOf(b.questStatus.status)
    }
    return a.timestamp - b.timestamp
  })
  return (
        <table className="table">
          <thead className="max-md:hidden">
            <tr>
              <th>Date</th>
              <th>Book</th>
              <th>Chapter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions?.map((sub) => (
              <tr>
                <td className="max-md:list-item max-md:p-0 max-md:before:content-['Date:'] max-md:before:mr-1 max-md:before:font-bold">{new Date(sub.timestamp * 1000).toLocaleDateString()}</td>
                <td className="max-md:list-item max-md:p-0 max-md:before:content-['Book:'] max-md:before:mr-1 before:font-bold italic max-md:before:not-italic">{sub.questChain.name}</td>
                <td className="max-md:list-item max-md:p-0 max-md:before:content-['Chapter:'] max-md:before:mr-1 max-md:before:font-bold max-md:-indent-2 max-md:pl-2">{sub.quest.name}</td>
                <td className={clsx((() => {
                    switch(sub.questStatus.status) {
                    case 'pass': return 'text-success'
                    case 'fail': return 'text-error'
                    case 'review': return 'text-info'
                    default: return 'text-yellow-200'
                  }
                 })(), "max-md:list-item max-md:p-0 max-md:mb-4 max-md:before:content-['Status:'] max-md:before:mr-1 max-md:before:font-bold")}>{sub.questStatus.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default Statuses