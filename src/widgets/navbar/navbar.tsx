"use client";

import { Menu, Rss } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { Separator } from "@/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/ui/navigation-menu";
import { Button } from "@/ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import { checkIsActive, paths } from "@/shared/routes";
import { cn } from "@/shared/lib/classnames";
import { usePathname, useRouter } from "next/navigation";
import { logo, routeList } from "@/constants/routeNavbar";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-full mx-auto sticky top-0 z-40 flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Rss className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 p-1 mr-2 border text-white" />
        {logo.title}
      </Link>
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link
                    href={paths.home}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="flex items-center"
                  >
                    <Rss className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    {logo.title}
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-10">
                {routeList.map(({ href, title }) => (
                  <Button
                    key={href}
                    onClick={() => {
                      setIsOpen(false);
                      router.push(href);
                    }}
                    variant="ghost"
                    className={cn(
                      "hover:text-primary justify-start bg-accent/[.5]",
                      checkIsActive(pathname, href) && "text-primary"
                    )}
                  >
                    <span className="truncate text-start">{title}</span>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, title, ...rest }) => (
              <NavigationMenuLink
                className={cn(
                  "hover:text-primary",
                  checkIsActive(pathname, href) && "text-primary"
                )}
                key={href}
                asChild
              >
                <Link href={href} target={"_blank"} className="text-base px-2">
                  {title}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
