import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ImageUp,
  BookType,
  BookKey,
  BookText,
  BookOpenCheck,
  Home,
  PartyPopper } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { SettingsD } from "@/components/Settings/Settings"
import { useWalletInfo } from "@/hooks/useWalletInfo"

export const accordionItems = [
  {
    title: "Cover",
    url: "#upload-cover",
    value: "item-1",
    icon: ImageUp,
  },
  {
    title: "Book Title",
    url: "#book-title",
    value: "item-2",
    icon: BookType,
  },
  {
    title: "Book Introduction",
    url: "#book-intro",
    value: "item-3",
    icon: BookOpenCheck,
  },
];

export const otherItems = [
  {
    title: "Chapters",
    url: "#chapters",
    value: "item-4",
    icon: BookText,
  },
  {
    title: "Completion NFT",
    url: "#completion",
    value: "item-5",
    icon: PartyPopper,
  },
  {
    title: "Owner Permissions",
    url: "#permissions",
    value: "item-6",
    icon: BookKey,
  },
]

function truncateAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 5)}…${address.slice(-5)}`
}

interface UploadSidebarProps {
  onAccordionChange: (value: string) => void
}

export function UploadSidebar({ onAccordionChange }: UploadSidebarProps) {
  const { address, ensName, ensAvatar } = useWalletInfo()

  const displayName = ensName || truncateAddress(address || '')

  const handleItemClick = (url: string) => {
    const item = accordionItems.find(item => item.url === url) || otherItems.find(item => item.url === url);
    if (item) {
      onAccordionChange(item.value);
      const element = document.querySelector(url);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Upload Hub</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-8">
              {accordionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2" onClick={() => handleItemClick(item.url)}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {otherItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2" onClick={() => handleItemClick(item.url)}>
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
          {!!displayName ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={ensAvatar || '/inner-d.svg'} alt="Avatar" />
                <AvatarFallback>{ensName ? ensName.slice(0, 2).toUpperCase() : truncateAddress(address || '').slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{displayName}</p>
              </div>
            </div>
          ) : (
            <div className="mx-auto">
              <w3m-button size="sm" />
            </div>
          )}
          <div className="flex items-center gap-1">
            <SettingsD />
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}