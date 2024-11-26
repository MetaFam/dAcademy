import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust the import path based on your setup
import { ImageUp, BookType, BookKey, BookText, BookOpenCheck, Home } from "lucide-react";
import { Link } from "@tanstack/react-router"; // Adjust the import path based on your setup

const items = [
  {
    title: "Upload Cover",
    url: "/upload-cover",
    icon: ImageUp,
  },
  {
    title: "Book Title",
    url: "/book-title",
    icon: BookType,
  },
  {
    title: "Book Introduction",
    url: "/book-intro",
    icon: BookOpenCheck,
  },
  {
    title: "Chapters",
    url: "/chapters",
    icon: BookText,
  },
  {
    title: "Owner Permissions",
    url: "/permissions",
    icon: BookKey,
  },
];

export function UploadSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Upload Hub</SidebarGroupLabel>
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
        <div className="mt-auto flex items-center justify-between gap-2 p-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://example.com/avatar.jpg" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium pl-2">John Doe</p>
            </div>
          </div>
          <Link to="/" className="flex items-center">
            <Home className="h-4 w-4 mr-4" />
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}