import { useSuspenseQuery } from "@tanstack/react-query"
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
          <thead>
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
                <td>{new Date(sub.timestamp * 1000).toLocaleString()}</td>
                <td>{sub.questChain.name}</td>
                <td>{sub.quest.name}</td>
                <td>{sub.questStatus.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default Statuses