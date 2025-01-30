import { createLazyFileRoute } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ShelfSidebar } from '@/components/Sidebars/shelfSidebar'
import { ShelfDescription } from '@/components/Shelf/ShelfDescription'
import { CompletionNFT } from '@/components/Upload/CompletionNFT'
import { ShelfBooks } from '@/components/Shelf/ShelfBooks'
import { ShelfPermissions } from '@/components/Shelf/ShelfPermissions'
import { Button } from '@/components/ui/button'
import { ShelfName } from '@/components/Shelf/ShelfName'
import CategoriesInput from '@/components/Upload/CategoriesInput'

export const Route = createLazyFileRoute('/shelf-creation/')({
  component: () => {
    return (
      <SidebarProvider>
        <ShelfSidebar />
        <SidebarTrigger />
        <main className="flex-1 mt-12 w-screen mb-8 lg:px-8">
          <div id="name" className="scroll-mt-12">
            <ShelfName />
          </div>
          <div id="description" className="mt-8 scroll-mt-12">
            <ShelfDescription/>
          </div>
          <div id="books" className="mt-8 scroll-mt-12">
            <ShelfBooks/>
          </div>
          <div id="category" className="mt-8 scroll-mt-12">
           <CategoriesInput/>
          </div>
          <div id="completion" className="mt-8 scroll-mt-12">
            <CompletionNFT />
          </div>
          <div id="permissions" className="mt-8 scroll-mt-12">
            <ShelfPermissions />
          </div>
          <div className="flex justify-center mt-4">
            <Button form="shelf" className="secondary">
              Create Shelf
            </Button>
        </div>
        </main>
      </SidebarProvider>
    )
  },
})
