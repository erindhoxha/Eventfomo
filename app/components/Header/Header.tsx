"use client";

import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LinkComponent from "../Link/Link";
import NavBar from "../NavigationMenu/NavigationMenu";
import { cn } from "@/lib/utils";
import {
  NavigationMenu as UINavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";

export type Navigation = { title: string; href: string; game: string }[];

const navigations: Navigation = [
  {
    title: "Chess",
    href: "/games/chess",
    game: "chess",
  },
  {
    title: "Dota 2",
    href: "/games/dota",
    game: "dota",
  },
  {
    title: "League of Legends",
    href: "/games/lol",
    game: "lol",
  },
  {
    title: "CS:GO 2",
    href: "/games/csgo",
    game: "csgo",
  },
  {
    title: "World of Warcraft",
    href: "/games/wow",
    game: "wow",
  },
];

const Header = ({ user }: { user: User | undefined }) => {
  return (
    <nav className="w-full items-center justify-between font-mono text-sm flex">
      <NavBar navigations={navigations} />
      <div className="lg:hidden">
        <UINavigationMenu>
          <NavigationMenuList>
            <LinkComponent size="none" variant="none" href="/">
              <p className="text-lg font-bold tracking-normal mr-4 border-b border-b-green-500">
                Eventfomo
              </p>
            </LinkComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground">
                Games
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black">
                <ul className="grid min-w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navigations.map((navigation) => {
                    const pathname = usePathname();
                    const isActive = pathname.startsWith(navigation.href);
                    return (
                      <ListItem
                        key={navigation.title}
                        title={navigation.title}
                        game={navigation.game}
                        href={navigation.href}
                        className={
                          isActive
                            ? "bg-accent text-accent-foreground font-bold"
                            : ""
                        }
                      />
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </UINavigationMenu>
      </div>
      <div className="pl-2 flex items-center space-x-4 lg:space-x-6">
        {!user?.email && (
          <LinkComponent variant="outline" href="/login">
            Login
          </LinkComponent>
        )}

        {user?.email && (
          <LinkComponent variant="outline" href="/dashboard">
            Dashboard
          </LinkComponent>
        )}

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;

interface ListItemProps {
  className?: string;
  title?: string;
  game: string;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, game, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="mr-2">
              <img
                width="24"
                style={{
                  minWidth: 24,
                  minHeight: 24,
                }}
                height="24"
                src={`/img/icons/${game}.png`}
                alt={`${game} icon`}
              />
            </div>
            <div className="text-sm font-medium leading-none">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
