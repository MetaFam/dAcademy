// src/components/UserProfile/Attended

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function WorkshopsAttended() {
  const workshops = [
    {
    date: "Today",
    topic: "Charmverse",
    org: "MG",
    recording: "IPFS",
    poap: "Link"
    },
    {
    date: "Today",
    topic: "Charmverse",
    org: "MG",
    recording: "IPFS",
    poap: "Link"
    },
    {
    date: "Today",
    topic: "Charmverse",
    org: "MG",
    recording: "IPFS",
    poap: "Link"
    },
    {
    date: "Today",
    topic: "Charmverse",
    org: "MG",
    recording: "IPFS",
    poap: "Link"
    },
    {
    date: "Today",
    topic: "Charmverse",
    org: "MG",
    recording: "IPFS",
    poap: "Link"
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Workshops Attended</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Org</TableHead>
              <TableHead >Recording</TableHead>
              <TableHead >POAP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workshops.map((workshop) => (
              <TableRow key={workshop.date}>
                <TableCell className="font-medium">{workshop.date}</TableCell>
                <TableCell>{workshop.topic}</TableCell>
                <TableCell>{workshop.org}</TableCell>
                <TableCell>{workshop.recording}</TableCell>
                <TableCell>{workshop.poap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}