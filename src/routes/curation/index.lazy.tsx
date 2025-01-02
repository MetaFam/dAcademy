// src/routes/curation/index.tsx

import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Library, BookOpen, HandCoins, Trees, Bus, AlertCircle } from 'lucide-react'
import { Alert, AlertTitle } from "@/components/ui/alert"
import { CreateCurationDialog } from "@/components/Curated/CreateCurationDialog"
import { useAtom } from 'jotai'
import { isGridVisibleAtom } from '@/atoms/isGridVisibleAtom'
import "@/styles/animatedGrid.css"

export const Route = createLazyFileRoute('/curation/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isGridVisible] = useAtom(isGridVisibleAtom)

  return (
    <div className="relative h-screen">
      {isGridVisible && <div className="animated-grid-bg"></div>}

      <div className="flex flex-col h-screen z-10 p-4">
        <h1 className="text-3xl font-bold text-center mt-2">Curated Bookshelves</h1>
        <Alert className="w-fit mx-auto mt-2 flex items-center p-4 bg-blue-400/30">
          <AlertCircle className="h-6 w-6 text-blue-600" />
          <AlertTitle className="text-center ml-2">Feature coming soon! - Stay tuned</AlertTitle>
        </Alert>
        <div className="grid sm:grid-cols-3 grid-cols-1 h-full gap-4 p-8">
          <div className="col-span-1 h-full">
            <Card className="h-full flex flex-col bg-black/30 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Library className="mr-2 text-blue-500" />
                  Recent Curated Shelves
                </CardTitle>
                <CardDescription>Discover the latest curated bookshelves from the dAcademy community. These are collections that can be from multiple organization shelves.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <ul className="list-disc pl-4 mt-2">
                  <li>ReFi: Resources for regenerative finance.</li>
                  <li>Web3 Grant Prep: Tips and guides for securing Web3 grants.</li>
                  <li>Onboarding: Resources for a collaborative future.</li>
                  <li>Dev Playbooks: Tips for Web3 developers.</li>
                </ul>
                <div className="flex justify-center mb-12 mt-8">
                  <CreateCurationDialog />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1 gap-y-2">
            <Card className="h-1/2 mb-4 bg-black/30 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trees className="mr-2 text-green-500" />
                  ReFi
                </CardTitle>
                <CardDescription>Resources for regenerative finance.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Leverage Web3 technologies to create equitable, sustainable, and regenerative financial systems.</p>
              </CardContent>
            </Card>
            <Card className="h-1/2 bg-black/30 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HandCoins className="mr-2 text-yellow-500" />
                  Web3 Grant Prep
                </CardTitle>
                <CardDescription>Tips and guides for securing Web3 grants.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Learn how to write effective proposals and connect with Web3 funding opportunities.</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1 sm:gap-y-2">
            <Card className="bg-black/30 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="mr-2 text-red-500" />
                  Onboarding
                </CardTitle>
                <CardDescription>Resources for a collaborative future.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Onboard into the future of Web3, DAOs, Collective Governance, and moar.</p>
                <p className="mt-2">Create your community's onboarding flow with Soulbound NFTs.</p>
              </CardContent>
            </Card>
            <Card className="h-1/2 mt-4 bg-black/30 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 text-purple-500" />
                  Dev Playbooks
                </CardTitle>
                <CardDescription>Tips for developers.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Enhance your development skills, especially for Web3.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}