"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navItems, impLinks } from "./navlinkConstant";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Clock } from "@/components/header/clock";
import { Button } from "@/components/ui/button";
import { LinkIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "./nav-link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
    className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
      scrolled
        ? "bg-zinc-500/10 dark:bg-zinc-900/20 backdrop-blur-md shadow-lg"
        : "bg-transparent shadow-none"
    )}
    
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left - Name */}
        <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          Nelson Chime
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-3 rounded-full border bg-background/80 px-6 py-3 shadow-md backdrop-blur-xl">
            {navItems.map((item, idx) => (
              <div key={item.href} className="flex items-center gap-3">
                {idx === 1 && <div className="h-6 w-px bg-border/50" />}
                <NavLink href={item.href} label={item.label} icon={item.icon} />
              </div>
            ))}

            {/* Divider before Imp Links */}
            <div className="h-6 w-px bg-border/50" />

            {/* Hover Expandable Imp Links */}
            <div className="relative group">
              <Button variant="secondary" size="sm" className="rounded-full">
                <LinkIcon className="h-4 w-4 mr-2" />
                Imp Links
              </Button>
              {/* Desktop dropdown */}
              <div className="absolute top-full right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="rounded-md border bg-popover p-1 text-popover-foreground shadow-md backdrop-blur-sm">
                  {impLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Theme + Clock + Mobile */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Clock />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      icon={item.icon}
                    />
                  ))}
                  {/* Imp Links in mobile */}
                  <div className="mt-6 border-t pt-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" /> Imp Links
                    </h4>
                    <div className="flex flex-col gap-2">
                      {impLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
