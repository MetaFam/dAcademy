import { useQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import Markdown from "react-markdown"

const proofQueryDocument = gql`
  query ProofDetails($proof: String) {
    proofSubmission(id: $proof) {
      description
        txHash
    }
    reviewSubmissions(where: {proof: $proof}) {
      description
      questStatus {
        status
      }
      txHash
    }
  }
`
type GraphReturn = {
  reviewSubmissions: {
    description: string
    txHash: string
    questStatus: {status: string}
  }
  proofSubmission: {
    description: string
    txHash: string
  }
}

export const SubmissionInfo = ({id, proof}: {id: string, proof?: string}) => {
  const {
    data: { reviewSubmissions, proofSubmission }  = {},
    isLoading,
  } = useQuery<GraphReturn>({
    enabled: !!proof,
    queryKey: [`info-${proof}`],
    queryFn: async () => request(
      import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
      proofQueryDocument,
      { proof },
    ),
  })

  if(isLoading) {
    return <span className="loading loading-spinner">Loading</span>
  }

  return (
    <>
        <div className="modal-box">
          <h2 className="text-left">Response: </h2>
          <div className="content"><Markdown>{proofSubmission?.description}</Markdown></div>
          <ol>
          {reviewSubmissions?.map((sub) => (
            <li key={sub.txHash}>
            <h2>Status: {sub.questStatus.status}</h2>
            <Markdown>{sub.description}</Markdown>
            </li>
          ))}
          </ol>
        </div>
        <form method="dialog" className="modal-backdrop">
        <button>close</button>
        </form>
    </>
  )
}
