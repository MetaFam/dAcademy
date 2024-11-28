// src/components/Home/Web3

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar } from "@/components/ui/avatar"
import { Shield } from "lucide-react";


export function Soulbound() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md cursor-pointer">
          <CardHeader className="flex flex-col items-center space-y-2">
            <Avatar className="bg-white/10 rounded-full p-2">
              <Shield size={24} className="text-red-400" />
            </Avatar>
            <div className="text-center">
              <CardTitle className="text-xl font-bold">Soulbound NFTs</CardTitle>

              <CardDescription className="text-gray-300">Verify your skills on-chain.</CardDescription>
            </div>
          </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Earn and showcase verifiable credentials using soulbound NFTs.</p>
            </CardContent>
        </Card>
      </HoverCardTrigger>
        <HoverCardContent className="w-100">
          <div className="flex justify-between space-x-4">
            <Avatar className="bg-white/10 rounded-full p-2">
              <Shield size={24} className="text-red-400" />
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm mb-2">
                Soulbound means non-transferable.
              </p>
              <p className="text-base font-semibold mb-2">
                Some possible use-cases:
              </p>
              <ul>
                <li className="text-sm mb-1">- Token-gating access to member-only content</li>
                <li className="text-sm mb-1">- Prerequisites for gigs or bounties</li>
                <li className="text-sm mb-1">- Onboarding flows for new members</li>
                <li className="text-sm mb-1">- Skill badge collection of an online course</li>
              </ul>
              <a href="https://docs.dacade.my/stack/soulbound/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-1">
                  Explore use-cases in our docs.
              </a>
            </div>
          </div>
        </HoverCardContent>
    </HoverCard>
  );
}