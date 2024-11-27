// src/components/Home/Web3

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book } from "lucide-react";
import { Button } from "../ui/button";
import Logo from '@/assets/logo.svg?raw';

export function DocsBtn() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="https://docs.dacade.my/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center space-x-2 shadow-md border border-gray-300">
            <Book size={16} />
            <span>Docs</span>
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={`data:image/svg+xml;utf8,${encodeURIComponent(Logo)}`}
              className="w-full h-full object-fit"
            />
            <AvatarFallback className="w-full h-full">MF</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">dAcademy Docs</h4>
            <p className="text-sm">
              Learn how dAcademy is made and how to use it.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}