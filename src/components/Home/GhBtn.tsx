// src/components/Home/Web3

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Logo from '@/assets/logo.svg?raw'
import { Github } from "lucide-react"

export function GhBtn() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="https://github.com/MetaFam/dAcademy" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center space-x-2 shadow-md border border-gray-300">
            <Github size={16} />
            <span>GitHub</span>
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
            <h4 className="text-sm font-semibold">dAcademy</h4>
            <p className="text-sm">
              Check out our code on GitHub.
            </p>
            <p className="text-sm">
              See a bug 🐛? Want a feature?
            </p>
            <p className="text-sm">
              Add an issue.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}