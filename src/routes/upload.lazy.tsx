import { createLazyFileRoute } from '@tanstack/react-router';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UploadSidebar } from "@/components/Sidebars/uploadSidebar";
import { UploadCover } from '@/components/Upload/Cover';
import { UploadIntro } from '@/components/Upload/Intro';
import { UploadChapters } from '@/components/Upload/Chapters';
import { UploadPermissions } from '@/components/Upload/Permissions';
import { UploadTitle } from '@/components/Upload/Title';



export const Route = createLazyFileRoute('/upload')({
  component: () => (
    <SidebarProvider>
      <UploadSidebar />
      <SidebarTrigger />
      <main className="flex-1 mt-12 w-screen">
        <Upload />
      </main>
    </SidebarProvider>
  ),
});

function Upload() {
  return (
    <div className="space-y-4 mx-auto w-2/3">
      <div id="upload-cover" className="scroll-mt-12">
        <UploadCover />
      </div>
      <div id="book-title" className="scroll-mt-12">
        <UploadTitle />
      </div>
      <div id="book-intro" className="scroll-mt-12">
        <UploadIntro />
      </div>
      <div id="chapters" className="scroll-mt-12">
        <UploadChapters />
      </div>
      <div id="permissions" className="scroll-mt-12">
        <UploadPermissions />
      </div>
    </div>
  );
}
