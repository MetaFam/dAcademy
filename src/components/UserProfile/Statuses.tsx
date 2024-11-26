// src/components/UserProfile/UserSubmissions

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { request, gql } from "graphql-request"
import { useState } from "react";

const submissionsQueryDocument = gql`
query ChainDetails($address: String) {
  proofSubmissions(where: {user: $address}) {
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
type Submission =  {
  id: string
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
  const [proof, setProof] = useState<string>()
  const setInfo = (proofId: string) => {
    setProof(proofId)
    ;(document.getElementById('subInfo') as HTMLDialogElement).showModal()
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Submission Statuses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Book</TableHead>
              <TableHead>Chapter</TableHead>
              <TableHead >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions?.map((sub, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{new Date(sub.timestamp * 1000).toLocaleDateString()}</TableCell>
                <TableCell>{sub.questChain.name}</TableCell>
                <TableCell>{sub.quest.name}</TableCell>
                <TableCell className={clsx((() => {
                    switch(sub.questStatus.status) {
                    case 'pass': return 'text-success'
                    case 'fail': return 'text-error'
                    case 'review': return 'text-info'
                    default: return 'text-yellow-200'
                    }
                })())}>{sub.questStatus.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default Statuses