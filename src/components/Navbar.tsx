import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils'; // Make sure you have this file
import { Menu, X, BookOpen, Github, User } from 'lucide-react'; // Import Lucide React icons

const components: { title: string; href: string; description: string }[] = [
  {
    title: "MetaGane",
    href: "/org/metagame",
    description:
      "MetaGame's OG Playbook Collection.",
  },
  {
    title: "Org2",
    href: "/org/yourOrg",
    description:
      "This is a new org bookshelf.",
  },
  {
    title: "Org3",
    href: "/org/yourOrg",
    description:
      "This is a new org bookshelf.",
  },
];

const curatedComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Community Curated Bookshelf",
    href: "/community/bookshelf1",
    description: "Community curated bookshelves.",
  },
  {
    title: "Moar from the community",
    href: "/community/bookshelf2",
    description:
      "Community curated bookshelves",
  },
  {
    title: "Community Extended",
    href: "/community/bookshelf3",
    description:
      "Community collections",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="text-sm font-medium leading-none">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 flex justify-center gap-2 dark:bg-slate-800 dark:text-white">
      <NavigationMenu>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <NavigationMenuList className="md:flex justify-center space-x-4 items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="md:block hidden">Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        dAcademy
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Decentralized Education Protocol
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
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
            <NavigationMenuTrigger className="md:block hidden">Bookshelves</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            <Link to="/profile" className={cn(navigationMenuTriggerStyle(), "md:block hidden")}>
              <NavigationMenuLink>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <NavigationMenu className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 dark:bg-slate-800 dark:text-white p-4">
          <NavigationMenuList className="flex flex-col space-y-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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
              <Link to="/profile" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
};