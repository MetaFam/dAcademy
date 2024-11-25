// src/components/UserProfile/UserSubmissions

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

export function UserSubmissions() {
  const submissions = [
    {
    date: "Today",
    book: "WTF ETH",
    chapter: "The First One",
    status: "Pass",
    },
    {
    date: "Yesterday",
    book: "WTF DAO",
    chapter: "Chapter 2",
    status: "Fail",
    },
    {
    date: "Yesterday",
    book: "WTF DAO",
    chapter: "Chapter 2",
    status: "Fail",
    },
    {
    date: "Yesterday",
    book: "WTF DAO",
    chapter: "Chapter 2",
    status: "Fail",
    },
    {
    date: "Yesterday",
    book: "WTF DAO",
    chapter: "Chapter 2",
    status: "Fail",
    },
  ];

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
            {submissions.map((submission) => (
              <TableRow key={submission.date}>
                <TableCell className="font-medium">{submission.date}</TableCell>
                <TableCell>{submission.book}</TableCell>
                <TableCell>{submission.chapter}</TableCell>
                <TableCell>{submission.status}</TableCell>
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