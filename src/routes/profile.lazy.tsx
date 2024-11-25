import { createLazyFileRoute } from '@tanstack/react-router';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileSidebar } from "@/components/Sidebars/profileSidebar";
import { UserSubmissions } from '@/components/UserProfile/UserSubmissions';
import { NFTEarned } from '@/components/UserProfile/NftsEarned';
import { WorkshopsAttended } from '@/components/UserProfile/Attended';

export const Route = createLazyFileRoute('/profile')({
  component: () => (
    <SidebarProvider>
      <ProfileSidebar />
      <SidebarTrigger />
      <main className="flex-1 mt-12 w-screen">
        <Profile />
      </main>
    </SidebarProvider>
  ),
});

function Profile() {
  return (
    <div className="space-y-4 mx-auto w-2/3">
      <NFTEarned />
      <UserSubmissions />
      <WorkshopsAttended />
    </div>
  );
}