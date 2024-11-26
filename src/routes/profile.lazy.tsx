// import { createLazyFileRoute } from '@tanstack/react-router'
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { ProfileSidebar } from "@/components/Sidebars/profileSidebar"
// import { UserSubmissions } from '@/components/UserProfile/UserSubmissions'
// import Earned from '@/components/UserProfile/Earned'
// import { WorkshopsAttended } from '@/components/UserProfile/Attended'
// import { useUsername } from '@/hooks/useUsername'


// export const Route = createLazyFileRoute('/profile')({
//   component: () => {
//     const { user } = Route.useParams()
//     const { address, ens, error } = useUsername(user)

//     if (error) return <h1>{error}</h1>;


//   return (
//     <SidebarProvider>
//       <ProfileSidebar />
//       <SidebarTrigger />
//         <main className="flex-1 mt-12 w-screen">
//           <div className="space-y-4 mx-auto w-2/3">
//             <div id="nfts-earned" className="scroll-mt-12">
//               <Earned account={address} />
//             </div>
//             <div id="submissions" className="scroll-mt-12">
//               <UserSubmissions />
//             </div>
//             <div id="workshops-attended" className="scroll-mt-12">
//               <WorkshopsAttended />
//             </div>
//           </div>
//         </main>
//     </SidebarProvider>
//     )
//   },
// })