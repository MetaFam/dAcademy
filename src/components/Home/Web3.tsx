// src/components/Home/Web3

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import OptimismLogo from "@/assets/Optimism.svg"
import OPLogo from "@/assets/OP.svg"
import { Code } from "lucide-react"

export function Web3() {
  return (
    <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="bg-white/10 rounded-full p-2">
          <Code size={24} className="text-blue-400" />
        </Avatar>
        <div className="text-center">
          <CardTitle className="text-xl font-bold">Web3</CardTitle>
          <CardDescription className="text-gray-300">Built on Optimism for decentralized learning.</CardDescription>
        </div>
        <HoverCard>
          <HoverCardTrigger asChild>
            <img src={OptimismLogo} alt="Optimism" width={72} height={72} className="mt-4 cursor-pointer" />
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={OPLogo}
                  className="w-full h-full object-fit"
                />
                <AvatarFallback className="w-full h-full">OP</AvatarFallback>
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
          </HoverCardContent>
        </HoverCard>
      </CardHeader>
      <CardContent className="text-gray-400 text-center">
        <p>Learn and engage with web3 technologies on the Optimism network.</p>
      </CardContent>
    </Card>
  );
}