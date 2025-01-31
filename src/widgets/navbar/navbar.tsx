"use client";

import { Menu } from "lucide-react";
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
    <header className="shadow-inner bg-opacity-15 w-full sticky top-0 z-40 p-4 bg-card">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <ToggleTheme />
          </div>
          <Link
            href="/"
            className={cn(
              "text-base font-medium px-2 py-1 transition-all duration-300"
            )}
          >
            {logo.title}
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card border-secondary p-4"
            >
              <div>
                <SheetHeader className="mb-4">
                  <SheetTitle className="flex items-center">
                    <Link
                      href={paths.home}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="flex items-center"
                    >
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
                    >
                      <span className="truncate">{title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start mt-4">
                <Separator className="mb-2" />
                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <NavigationMenu className="hidden lg:flex w-full">
          <NavigationMenuList className="flex space-x-8 ml-auto">
            {routeList.map(({ href, title, ...rest }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  className={cn(
                    "text-base font-medium px-2 py-1 transition-all duration-300"
                  )}
                  asChild
                >
                  <Link
                    href={href}
                    target={rest.blank ? "_blank" : undefined}
                    className="w-full"
                  >
                    {title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
