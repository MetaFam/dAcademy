import { createLazyFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ProfileSidebar } from '@/components/Sidebars/profileSidebar'
import Statuses from '@/components/UserProfile/Statuses'
import Earned from '@/components/UserProfile/Earned'
import { WorkshopsAttended } from '@/components/UserProfile/Attended'
import { useUsername } from '@/hooks/useUsername'

export const Route = createLazyFileRoute('/user/$user')({
  component: () => {
    const { user } = Route.useParams()
    const { address, error } = useUsername(user)

    if (error) return <h1>{error}</h1>

    return (
      <SidebarProvider>
        <ProfileSidebar />
        <SidebarTrigger />
        <main className="flex-1 mt-12 w-screen">
          <div className="space-y-4 mx-auto w-2/3">
            <div id="nfts-earned" className="scroll-mt-12">
              <Suspense fallback={
                <h2 className="loading loading-spinner"></h2>
              }>
                <Earned account={address}/>
              </Suspense>
            </div>
            <div id="submissions" className="scroll-mt-12">
              <Suspense fallback={
                  <h2 className="loading loading-spinner"></h2>
                }><Statuses account={address}/>
              </Suspense>
            </div>
            <div id="workshops-attended" className="scroll-mt-12">
              <WorkshopsAttended />
            </div>
          </div>
        </main>
      </SidebarProvider>
    )
  },
})
