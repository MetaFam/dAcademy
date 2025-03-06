import { createLazyFileRoute } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ShelfSidebar } from '@/components/Sidebars/shelfSidebar'
import { ShelfDescription } from '@/components/Shelf/ShelfDescription'
import { CompletionNFT } from '@/components/Shelf/ShelfCompletionNFT'
import { ShelfBooks } from '@/components/Shelf/ShelfBooks'
import { ShelfPermissions } from '@/components/Shelf/ShelfPermissions'
import { Button } from '@/components/ui/button'
import { ShelfName } from '@/components/Shelf/ShelfName'
import ShelfCategoriesInput from '@/components/Shelf/ShelfCategories'
import { ShelfCover } from '@/components/Shelf/ShelfCover'
import { UploadShelf } from '@/components/Shelf/UploadShelf'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const Route = createLazyFileRoute('/shelf/new')({
  component: Upload,
})

function Upload() {
  const [processing, setProcessing] = useState(false)
  return (
    <>
      <Helmet><title>क: Create Shelf</title></Helmet>
      <SidebarProvider>
        <ShelfSidebar />
        <SidebarTrigger />
        <main className="flex-1 mt-12 w-screen mb-8 lg:px-8">
          <form
            id="shelf"
            onSubmit={(evt) => {
              evt.preventDefault()
            }}
          >
            <div id="cover" className="scroll-mt-12">
              <ShelfCover />
            </div>
            <div id="name" className="mt-8 scroll-mt-12">
              <ShelfName />
            </div>
            <div id="description" className="mt-8 scroll-mt-12">
              <ShelfDescription />
            </div>
            <div id="books" className="mt-8 scroll-mt-12">
              <ShelfBooks />
            </div>
            <div id="category" className="mt-8 scroll-mt-12">
              <ShelfCategoriesInput />
            </div>
            <div id="completion" className="mt-8 scroll-mt-12">
              <CompletionNFT />
            </div>
          </form>
          <div id="permissions" className="mt-8 scroll-mt-12">
            <ShelfPermissions />
          </div>
          <div className="flex justify-center mt-4">
            <Button type="button" onClick={() => setProcessing(true)} form="shelf" className="secondary">
              Create Shelf
            </Button>
          </div>
          {processing && <UploadShelf />}
        </main>
      </SidebarProvider>
    </>
  )
}
