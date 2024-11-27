// src/components/Home/Ipfs

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar} from "@/components/ui/avatar"
import { Database } from "lucide-react";


export function Ipfs() {
  return (
    <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
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
  );
}