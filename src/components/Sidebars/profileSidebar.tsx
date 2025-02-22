import { Link } from '@tanstack/react-router'
import {
  LaptopMinimalCheck, SendHorizonal, Presentation, Home
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import {
  Avatar, AvatarFallback, AvatarImage,
} from '@/components/ui/avatar'
import { SettingsD } from '@/components/Settings/Settings'
import { useWalletInfo } from '@/hooks/useWalletInfo'
import { truncateAddress } from '@/lib/utils'

const items = [
  {
    title: 'NFTs Earned',
    url: '#nfts-earned',
    icon: LaptopMinimalCheck,
  },
  {
    title: 'Submissions',
    url: '#submissions',
    icon: SendHorizonal,
  },
  {
    title: 'Workshops Attended',
    url: '#workshops-attended',
    icon: Presentation,
  },
]

export function ProfileSidebar() {
  const { address, ensName, ensAvatar } = useWalletInfo()
  const displayName = ensName || truncateAddress(address || '')

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
          {displayName ? (
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage src={ensAvatar || '/inner-d.svg'} alt={displayName}/>
                <AvatarFallback>
                  {ensName ? ensName.slice(0, 2).toUpperCase() : truncateAddress(address || '').slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{displayName}</p>
              </div>
            </div>
          ) : (
            <div className="mx-auto">
              <w3m-button size="sm"/>
            </div>
          )}
          <div className="flex items-center gap-1">
            <SettingsD/>
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}