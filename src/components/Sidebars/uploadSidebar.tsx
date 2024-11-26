import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUp, BookType, BookKey, BookText, BookOpenCheck, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SettingsD } from "@/components/Settings/Settings";

const items = [
  {
    title: "Upload Cover",
    url: "#upload-cover",
    icon: ImageUp,
  },
  {
    title: "Book Title",
    url: "#book-title",
    icon: BookType,
  },
  {
    title: "Book Introduction",
    url: "#book-intro",
    icon: BookOpenCheck,
  },
  {
    title: "Chapters",
    url: "#chapters",
    icon: BookText,
  },
  {
    title: "Owner Permissions",
    url: "#permissions",
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
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto flex items-center justify-between gap-2 p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://example.com/avatar.jpg" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">John Doe</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SettingsD />
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}