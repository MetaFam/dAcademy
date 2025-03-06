import { createLazyFileRoute } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { CollectionSidebar } from '@/components/Sidebars/collectionSidebar'
import { CollectionDescription } from '@/components/Collection/CollectionDescription'
import { CompletionNFT } from '@/components/Collection/CollectionCompletionNFT'
import { CollectionShelves } from '@/components/Collection/CollectionShelves'
import { CollectionPermissions } from '@/components/Collection/CollectionPermissions'
import { Button } from '@/components/ui/button'
import { CollectionName } from '@/components/Collection/CollectionName'
import CollectionCategoriesInput from '@/components/Collection/CollectionCategories'
import { CollectionCover } from '@/components/Collection/CollectionCover'
import { UploadCollection } from '@/components/Collection/UploadCollection'
import { useState } from 'react'


const Upload = () => {
  const [processing, setProcessing] = useState(false)
  return (
    <SidebarProvider>
      <CollectionSidebar />
      <SidebarTrigger />
      <main className="flex-1 mt-12 w-screen mb-8 lg:px-8">
        <form
          id="Collection"
          onSubmit={(evt) => {
            evt.preventDefault()
          }}
        >
          <div id="cover" className="scroll-mt-12">
            <CollectionCover />
          </div>
          <div id="name" className="mt-8 scroll-mt-12">
            <CollectionName />
          </div>
          <div id="description" className="mt-8 scroll-mt-12">
            <CollectionDescription/>
          </div>
          <div id="books" className="mt-8 scroll-mt-12">
            <CollectionShelves/>
          </div>
          <div id="category" className="mt-8 scroll-mt-12">
          <CollectionCategoriesInput/>
          </div>
          <div id="completion" className="mt-8 scroll-mt-12">
            <CompletionNFT />
          </div>
        </form>
        <div id="permissions" className="mt-8 scroll-mt-12">
          <CollectionPermissions />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="button" onClick={() => setProcessing(true)} form="Collection" className="secondary">
            Create Collection
          </Button>
        </div>
        {processing && <UploadCollection/>}
      </main>
    </SidebarProvider>
  )
}

export const Route = createLazyFileRoute('/collection/')({
  component: Upload
})