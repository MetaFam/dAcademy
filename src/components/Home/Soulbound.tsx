import { Shield, Info } from 'lucide-react'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useIsMobile } from '@/hooks/useIsMobile'

interface SoulboundProps {
  id?: string
}

export function Soulbound({ id }: SoulboundProps) {
  const isDesktop = !useIsMobile()

  const cardContent = (
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
        <ul className="list-disc">
          <li className="text-sm mb-1">Token-gating access to member-only content</li>
          <li className="text-sm mb-1">Prerequisites for gigs or bounties</li>
          <li className="text-sm mb-1">Onboarding flows for new members</li>
          <li className="text-sm mb-1">Skill badge collection of an online course</li>
        </ul>
        <a href="https://docs.dacade.my/stack/soulbound/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-1">
          Explore use-cases in our docs.
        </a>
      </div>
    </div>
  )

  return (
    <>
      {isDesktop ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card id={id} className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md cursor-pointer">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Avatar className="bg-white/10 rounded-full p-2">
                  <Shield size={24} className="text-red-400" />
                </Avatar>
                <div className="text-center">
                  <CardTitle className="text-xl font-bold">Soulbound NFTs</CardTitle>
                  <CardDescription className="text-gray-300">Verify your skills on-chain.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400 text-center">
                <p>Earn and showcase verifiable credentials using soulbound NFTs.</p>
                <p className="text-green-500">#Learn2Earn</p>
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
            <Card id={id} className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md cursor-pointer">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Avatar className="bg-white/10 rounded-full p-2">
                  <Shield size={24} className="text-red-400" />
                </Avatar>
                <div className="text-center">
                  <CardTitle className="text-xl font-bold">Soulbound NFTs</CardTitle>
                  <CardDescription className="text-gray-300">Verify your skills on-chain.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400 text-center flex flex-col items-center">
                <p>Earn and showcase verifiable credentials using soulbound NFTs.</p>
                <p className="text-green-500">#Learn2Earn</p>
                <Info size={24} className="mt-2 text-blue-400" />
              </CardContent>
            </Card>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Soulbound NFTs</DrawerTitle>
              <DrawerDescription>Verify your skills on-chain.</DrawerDescription>
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
  )
}