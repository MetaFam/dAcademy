// src/components/Home/OpenSource

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar} from "@/components/ui/avatar"
import { Book } from "lucide-react";


export function OpenSource() {
  return (
    <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="bg-white/10 rounded-full p-2">
          <Book size={24} className="text-yellow-400" />
        </Avatar>
        <div className="text-center">
          <CardTitle className="text-xl font-bold">Open-Source</CardTitle>
          <CardDescription className="text-gray-300">Supporting decentralized education for all.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-gray-400 text-center">
        <p>Our project is open-source and a collective library.  We also offer white-label solutions to help you set up your own decentralized academy.</p>
      </CardContent>
    </Card>
  );
}