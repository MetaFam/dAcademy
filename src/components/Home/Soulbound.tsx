// src/components/Home/Web3

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar} from "@/components/ui/avatar"
import { Shield } from "lucide-react";


export function Soulbound() {
  return (
    <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="bg-white/10 rounded-full p-2">
          <Shield size={24} className="text-red-400" />
        </Avatar>
        <div className="text-center">
          <CardTitle className="text-xl font-bold">Soulbound NFTs</CardTitle>
          <CardDescription className="text-gray-300">Verify your skills with blockchain.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-gray-400 text-center">
        <p>Earn and showcase verifiable credentials using soulbound NFTs.</p>
      </CardContent>
    </Card>
  );
}