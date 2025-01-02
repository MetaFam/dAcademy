import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, BookOpen, Github, User, Home } from 'lucide-react' // Import Home icon
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Logo from '@/assets/logo.svg?raw'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "MetaGame",
    href: "/org/metagame",
    description:
      "MetaGame's OG Playbook Collection.",
  },
  {
    title: "Add your Org's Bookshelf",
    href: "/org/",
    description:
      "Upload some playbooks!",
  },
]


const curatedComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Community Collections",
    href: "/curation",
    description: "Community curated bookshelves",
  },
  {
    title: "ReFi Shelf",
    href: "/curation",
    description:
      "Curated ReFi collection",
  },
  {
    title: "Feature Coming Soon...",
    href: "/curation",
    description:
      "Create a curation!",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, href, title, children, icon, ...props }, ref) => {
  return (
    <li>
        <Link to={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title && <span className="text-sm font-medium leading-none">{title}</span>}
          </div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>}
        </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="z-50 p-2 flex justify-center gap-2 dark:bg-slate-800 dark:text-white pt-2 relative">
      <NavigationMenu>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <NavigationMenuList className="md:flex justify-center space-x-4 items-center">
          <NavigationMenuItem>
            <Link to="/" className="md:block hidden">
              <Home size={16} className="hover:text-accent-foreground" />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="md:block hidden">About dAcademy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to="/"
                    >
                      <div dangerouslySetInnerHTML={{ __html: Logo }} className="mb-2 mt-4 text-lg font-medium">
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Decentralized Education Protocol
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="https://docs.dacade.my/" title="Docs" icon={<BookOpen size={16} />}>
                  Learn how to use dAcademy and how it's built.
                </ListItem>
                <ListItem href="https://github.com/MetaFam/dAcademy" title="GitHub" icon={<Github size={16} />}>
                  dAcademy is open-source and on GitHub.  See a bug? Like the build?
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="md:block hidden">Bookshelves</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map(({ title, href, description }) => (
                  <ListItem
                    key={title}
                    {...{ title, href }}
                  >
                    {description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="md:block hidden">Curated</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {curatedComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/user" className={cn(navigationMenuTriggerStyle(), "md:block hidden")}>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Profile
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <NavigationMenu className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 dark:bg-slate-800 dark:text-white p-4 z-50">
          <NavigationMenuList className="flex flex-col space-y-4">
            <NavigationMenuItem>
              <Link to="/" className="flex items-center">
                <Home size={16} className="hover:text-accent-foreground" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About dAcademy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="pl-4">
                  <ListItem href="https://docs.dacade.my/" title="Docs" icon={<BookOpen size={16} />}>
                    Learn how you can use dAcademy, what it's built with, and how it works.
                  </ListItem>
                  <ListItem href="https://github.com/MetaFam/dAcademy" title="GitHub" icon={<Github size={16} />}>
                    dAcademy is open-source and on GitHub.  See a bug? Like the build?
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Bookshelves</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="pl-4">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Curated</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="pl-4">
                  {curatedComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/user" className={navigationMenuTriggerStyle()}>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
      <w3m-button size='sm' balance="hide" />
    </div>
  )
}