// src/components/Home/Web3.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger } from "@/components/ui/drawer"
import { Code, Info } from "lucide-react"
import OptimismLogo from "@/assets/Optimism.svg"
import OPLogo from "@/assets/OP.svg"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export function Web3() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const hoverCardContent = (
    <div className="flex justify-between space-x-4">
      <Avatar className="w-12 h-12">
        <AvatarImage src={OPLogo} className="w-full h-full object-cover" />
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Optimism</h4>
        <p className="text-sm">
          Optimism is a layer 2 scaling solution for Ethereum.
        </p>
        <p className="text-sm">
          It enables decentralized learning by providing a more efficient and cost-effective blockchain.
        </p>
        <a href="https://docs.dacade.my/stack/optimism/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-1">
          Start Building on Optimism
        </a>
      </div>
    </div>
  )

  const triggerContent = (
    <div className="flex items-center cursor-pointer mt-1">
      <span>Built on</span>
      <img src={OptimismLogo} alt="Optimism" width={72} height={72} className="ml-2 mb-0.5" />
    </div>
  )

  return (
    <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="bg-white/10 rounded-full p-2">
          <Code size={24} className="text-blue-400" />
        </Avatar>
        <div className="text-center">
          <CardTitle className="text-xl font-bold">Web3</CardTitle>
          <CardDescription className="text-gray-300">
            {isDesktop ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  {triggerContent}
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  {hoverCardContent}
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Drawer>
                <DrawerTrigger asChild>
                  <div className="flex items-center">
                    {triggerContent}
                    <Info size={24} className="ml-2 text-blue-400" />
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Optimism</DrawerTitle>
                    <DrawerDescription>A layer 2 scaling solution for Ethereum.</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    {hoverCardContent}
                  </div>
                  <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                      <button className="text-blue-400 hover:underline">Close</button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-gray-400 text-center">
        <p>
        Smart-contracts on the Optimism network for speed and minimal costs. Paymaster coming soon!
        </p>
      </CardContent>
    </Card>
  )
}