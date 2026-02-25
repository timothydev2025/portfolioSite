"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Tracks which section id is currently in the viewport.
 * Only runs on the homepage ("/").
 */
export function useActiveSection(sectionIds: string[]): string {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Only track sections on the homepage
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const NAV_HEIGHT = 90; // px offset for fixed navbar

    const compute = () => {
      const scrollY = window.scrollY;

      // Walk sections bottom-to-top; the last one whose top is above the
      // scroll position (with navbar offset) is the active one.
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY - NAV_HEIGHT;
        if (scrollY >= top - 10) {
          current = id;
        }
      }
      setActiveSection(current || sectionIds[0] || "");
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    return () => window.removeEventListener("scroll", compute);
  }, [pathname, sectionIds]);

  return activeSection;
}
