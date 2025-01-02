// src/components/UserProfile/Statuses

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useSuspenseQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { request, gql } from "graphql-request"
import { useState } from "react"
import { SubmissionDetails } from "@/components/UserProfile/SubmissionDetails"
import { useSubgraph } from "@/hooks"

const submissionsQueryDocument = gql`
  query ChainDetails($address: String) {
    proofSubmissions(where: { user: $address }) {
      id
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

type Submission = {
  id: string;
  timestamp: number;
  questChain: {
    name: string;
  }
  questStatus: {
    status: string;
  }
  quest: {
    name: string;
  }
}

type GraphReturn = {
  proofSubmissions: Array<Submission>;
}

const truncateTextAfterWords = (text: string, wordLimit: number = 3): string => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text
}

const Statuses = ({ account }: { account?: string }) => {
  const subgraph = useSubgraph()
  const {
    data: { proofSubmissions } = {},
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`submissions-${account}`],
    queryFn: async () =>
      request(
        subgraph,
        submissionsQueryDocument,
        { address: account?.toLowerCase() },
      ),
  })

  const submissions = proofSubmissions?.sort((a, b) => {
    if (a.questStatus.status !== b.questStatus.status) {
      const statuses = ['review', 'fail', 'pass'];
      return statuses.indexOf(a.questStatus.status) - statuses.indexOf(b.questStatus.status);
    }
    return a.timestamp - b.timestamp;
  })

  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const setInfo = (proofId: string) => {
    const submission = submissions?.find((sub) => sub.id === proofId);
    setSelectedSubmission(submission || null);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Submission Statuses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-default">
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Book</TableHead>
              <TableHead>Chapter</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions?.map((sub, idx) => (
              <TableRow
                key={idx}
                onClick={() => setInfo(sub.id)}
                className="cursor-pointer hover:bg-secondary/30"
              >
                <TableCell className="font-medium">
                  {new Date(sub.timestamp * 1000).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                  {truncateTextAfterWords(sub.questChain.name)}
                </TableCell>
                <TableCell className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                  {sub.quest.name}
                </TableCell>
                <TableCell
                  className={clsx({
                    'text-green-400': sub.questStatus.status === 'pass',
                    'text-red-600': sub.questStatus.status === 'fail',
                    'text-blue-500': sub.questStatus.status === 'review',
                    'text-yellow-200': sub.questStatus.status !== 'pass' && sub.questStatus.status !== 'fail' && sub.questStatus.status !== 'review',
                  })}
                >
                  {sub.questStatus.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {selectedSubmission && (
        <SubmissionDetails submission={selectedSubmission} onClose={() => setSelectedSubmission(null)} />
      )}
    </Card>
  )
}

export default Statuses