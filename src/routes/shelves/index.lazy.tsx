import { createLazyFileRoute } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ShelfSidebar } from '@/components/Sidebars/shelfSidebar'


export const Route = createLazyFileRoute('/shelves/')({
  component: () => {


    return (
      <SidebarProvider>
        <ShelfSidebar />
        <SidebarTrigger />
        <main className="flex-1 mt-12 w-screen">
          <div className="space-y-4 mx-auto w-2/3">
            <div id="shelf-creation" className="scroll-mt-12"></div>
            <div id="shelf-books" className="scroll-mt-12"></div>
            <div id="shelf-nft" className="scroll-mt-12"></div>
          </div>
        </main>
      </SidebarProvider>
    )
  },
})
