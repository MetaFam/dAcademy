import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust the import path based on your setup
import { LaptopMinimalCheck, SendHorizonal, Presentation } from "lucide-react";

// Menu items.
const items = [
  {
    title: "NFTs Earned",
    url: "/nfts",
    icon: LaptopMinimalCheck, // You can choose an appropriate icon
  },
  {
    title: "Submissions",
    url: "/submissions",
    icon: SendHorizonal, // You can choose an appropriate icon
  },
  {
    title: "Workshops Attended",
    url: "/workshops",
    icon: Presentation, // You can choose an appropriate icon
  },
];

export function ProfileSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>User Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-8">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto flex items-center gap-2 p-4">
          <Avatar>
            <AvatarImage src="https://example.com/avatar.jpg" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium pl-2">John Doe</p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}