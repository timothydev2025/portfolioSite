"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, label, icon, isActive = false, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isHashLink = href.startsWith("/#");
  const sectionId = isHashLink ? href.slice(2) : null;

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (onClick) onClick();

    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    if (isHashLink && sectionId) {
      if (pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }

    router.push(href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
        isActive
          ? "bg-primary/10 text-primary dark:bg-primary/20"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
      )}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
