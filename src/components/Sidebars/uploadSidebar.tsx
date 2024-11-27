import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUp, BookType, BookKey, BookText, BookOpenCheck, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SettingsD } from "@/components/Settings/Settings";
import { useWalletInfo } from "@/hooks/useWalletInfo";

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

function truncateAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 5)}…${address.slice(-5)}`;
}

export function UploadSidebar() {
  const { address, ensName, ensAvatar } = useWalletInfo();

  const displayName = ensName || truncateAddress(address || '');

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
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={ensAvatar || "https://example.com/avatar.jpg"} alt="Avatar" />
              <AvatarFallback>{ensName ? ensName.slice(0, 2).toUpperCase() : truncateAddress(address || '').slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{displayName}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
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