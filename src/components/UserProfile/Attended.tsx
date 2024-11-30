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
import { Info } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function WorkshopsAttended() {
  const workshops = [
    {
      date: "Today9",
      topic: "Charmverse",
      org: "MG",
      recording: "IPFS",
      poap: "Link",
    },
    {
      date: "Today8",
      topic: "Charmverse",
      org: "MG",
      recording: "IPFS",
      poap: "Link",
    },
    {
      date: "Today7",
      topic: "Charmverse",
      org: "MG",
      recording: "IPFS",
      poap: "Link",
    },
  ];

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const comingSoonContent = (
    <div>
      <p>This feature is coming soon with huddle01 dRTC integration.</p>
    </div>
  );

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-center text-xl flex items-center gap-2">
          Workshops Attended
          {isDesktop ? (
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Info size={24} className="text-blue-400 cursor-pointer" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80 lg:text-base">
                {comingSoonContent}
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Drawer>
              <DrawerTrigger asChild>
                <Info size={24} className="text-blue-400 cursor-pointer" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Workshops Attended</DrawerTitle>
                </DrawerHeader>
                <div className="px-4">
                  {comingSoonContent}
                </div>
                <DrawerFooter className="pt-2">
                  <DrawerClose asChild>
                    <button className="text-blue-400 hover:underline">Close</button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-default">
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Org</TableHead>
              <TableHead>Recording</TableHead>
              <TableHead>POAP</TableHead>
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