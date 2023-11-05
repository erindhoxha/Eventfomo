'use client';

import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LinkComponent from '../Link/Link';
import { NavBar } from '../NavigationMenu/NavigationMenu';
import { cn } from '@/lib/utils';
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
 {
  title: 'Chess',
  href: '/docs/primitives/alert-dialog',
  description:
   'A modal dialog that interrupts the user with important content and expects a response.',
 },
 {
  title: 'Dota 2',
  href: '/docs/primitives/hover-card',
  description: 'For sighted users to preview content available behind a link.',
 },
 {
  title: 'League of Legends',
  href: '/docs/primitives/progress',
  description:
   'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
 },
 {
  title: 'Maple Story',
  href: '/docs/primitives/scroll-area',
  description: 'Visually or semantically separates content.',
 },
 {
  title: 'CS:GO 2',
  href: '/docs/primitives/tabs',
  description:
   'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
 },
 {
  title: 'Tennis',
  href: '/docs/primitives/tooltip',
  description:
   'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
 },
];

const Header = () => {
 return (
  <nav className="w-full items-center justify-between font-mono text-sm flex">
   <NavBar />
   <div className="md:hidden">
    <NavigationMenu>
     <NavigationMenuList>
      <NavigationMenuItem>
       <NavigationMenuTrigger>Games</NavigationMenuTrigger>
       <NavigationMenuContent>
        <ul className="grid min-w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
     </NavigationMenuList>
    </NavigationMenu>
   </div>
   <div className="flex items-center space-x-4 lg:space-x-6">
    <LinkComponent href="/login">Login</LinkComponent>
    <ThemeToggle />
   </div>
  </nav>
 );
};

export default Header;

const ListItem = React.forwardRef<
 React.ElementRef<'a'>,
 React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
 return (
  <li>
   <NavigationMenuLink asChild>
    <a
     ref={ref}
     className={cn(
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      className
     )}
     {...props}
    >
     <div className="text-sm font-medium leading-none">{title}</div>
     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
      {children}
     </p>
    </a>
   </NavigationMenuLink>
  </li>
 );
});
ListItem.displayName = 'ListItem';
