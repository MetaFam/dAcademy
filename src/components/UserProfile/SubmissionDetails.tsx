import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import Markdown from 'react-markdown'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { cn, truncateHash } from '@/lib/utils'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useSubgraph } from '@/hooks'

type Submission = {
  id: string;
  timestamp: number;
  questChain: {
    name: string;
  };
  questStatus: {
    status: string;
  };
  quest: {
    name: string;
  }
}

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
  reviewSubmissions: Array<{
    description: string
    txHash: string
    questStatus: {status: string}
  }>
  proofSubmission: {
    description: string
    txHash: string
  }
}

export function SubmissionDetails(
  { submission, onClose }:
  { submission: Submission; onClose: () => void }
) {
  const isDesktop = !useIsMobile()
  const subgraph = useSubgraph()
  const {
    data: { reviewSubmissions, proofSubmission } = {},
    isLoading,
  } = useQuery<GraphReturn>({
    enabled: !!submission.id,
    queryKey: [`info-${submission.id}`],
    queryFn: async () => request(
      subgraph,
      proofQueryDocument,
      { proof: submission.id },
    ),
  })

  if (isLoading) {
    return <span className="loading loading-spinner">Loading</span>
  }

  const Content = (
    <>
      <p>
        <span className="text-blue-400">Date:</span>{' '}
        {new Date(submission.timestamp * 1000).toLocaleDateString()}
      </p>
      <p>
        <span className="text-blue-400">Book:</span>{' '}
        {submission.questChain.name}
      </p>
      <p>
        <span className="text-blue-400">Chapter:</span>{' '}
        {submission.quest.name}
      </p>
      <h2 className="text-blue-400 text-left">Proof Response:</h2>
      <div className="content">
        <Markdown>{proofSubmission?.description}</Markdown>
      </div>
      <ol>
        {reviewSubmissions?.map((sub) => (
          <li key={sub.txHash}>
            <h2 className="mb-2">
              <span className="text-blue-400">Status: </span>
              <span className={cn({
                'text-green-400': sub.questStatus.status === 'pass',
                'text-red-600': sub.questStatus.status === 'fail',
                'text-blue-500': sub.questStatus.status === 'review',
                'text-yellow-200': sub.questStatus.status !== 'pass' && sub.questStatus.status !== 'fail' && sub.questStatus.status !== 'review',
              })}>
                {sub.questStatus.status}
              </span>
            </h2>
            <Markdown>{sub.description}</Markdown>
            <p>
              <span className="text-blue-400">Proof TX Hash:  </span>
              {proofSubmission?.txHash ? (
                <a
                  href={`https://optimistic.etherscan.io/tx/${proofSubmission.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline cursor-pointer"
                >
                  {truncateHash(proofSubmission.txHash)}
                </a>
              ) : 'N/A'}
            </p>
            <p>
              <span className="text-blue-400">Review TX Hash:  </span>
              {sub.txHash ? (
                <a
                  href={`https://optimistic.etherscan.io/tx/${sub.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline cursor-pointer"
                >
                  {truncateHash(sub.txHash)}
                </a>
              ) : 'N/A'}
            </p>
          </li>
        ))}
      </ol>
    </>
  )

  return (
    <>
      {isDesktop ? (
        <Dialog open={true} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Submission Details</DialogTitle>
              <DialogDescription>
                Details of your submissions
              </DialogDescription>
            </DialogHeader>
            {Content}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={true} onOpenChange={onClose}>
          <DrawerContent className="px-4">
            <DrawerHeader className="text-left">
              <DrawerTitle>Submission Details</DrawerTitle>
              <DrawerDescription>
                Details of your submissions
              </DrawerDescription>
            </DrawerHeader>
            {Content}
            <DrawerFooter className="pt-4">
              <DrawerClose asChild>
                <button
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  onClick={onClose}
                >
                  Close
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}