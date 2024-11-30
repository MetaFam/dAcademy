// src/components/Home/Ipfs.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Database, Network, Info } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Ipfs() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const cardContent = (
    <div className="flex justify-between space-x-4">
      <Avatar className="bg-white/10 rounded-full p-2">
        <Network size={24} className="text-green-400" />
      </Avatar>
      <div className="space-y-1">
        <p className="text-sm mb-2">
          InterPlanetary File System
        </p>
        <ul>
          <li className="text-sm mb-1">- Decentralized web hosting for websites</li>
          <li className="text-sm mb-1">- Secure and efficient data storage</li>
          <li className="text-sm mb-1">- Resilient and fast content distribution</li>
          <li className="text-sm mb-1">- Integration with blockchain for immutable data</li>
        </ul>
        <a href="https://docs.dacade.my/stack/ipfs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-1">
          See how we use IPFS in our docs.
        </a>
      </div>
    </div>
  );

  return (
    <>
      {isDesktop ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="cursor-pointer bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Avatar className="bg-white/10 rounded-full p-2">
                  <Database size={24} className="text-green-400" />
                </Avatar>
                <div className="text-center">
                  <CardTitle className="text-xl font-bold">IPFS</CardTitle>
                  <CardDescription className="text-gray-300">Store and share knowledge securely.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400 text-center">
                <p>Utilize IPFS for decentralized storage of learning materials.</p>
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-100">
            {cardContent}
          </HoverCardContent>
        </HoverCard>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Card className="cursor-pointer bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Avatar className="bg-white/10 rounded-full p-2">
                  <Database size={24} className="text-green-400" />
                </Avatar>
                <div className="text-center">
                  <CardTitle className="text-xl font-bold">IPFS</CardTitle>
                  <CardDescription className="text-gray-300">Store and share knowledge securely.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400 text-center flex flex-col items-center">
                <p>Utilize IPFS for decentralized storage of learning materials.</p>
                <Info size={24} className="mt-2 text-blue-400" />
              </CardContent>
            </Card>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>IPFS</DrawerTitle>
              <DrawerDescription>Store and share knowledge securely.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              {cardContent}
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <button className="text-blue-400 hover:underline">Close</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}