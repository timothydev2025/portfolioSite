"use client";

import Link from "next/link";
import { navItems, impLinks } from "@/components/header/navlinkConstant";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

const currentYear = new Date().getFullYear();

function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="h-3.5 w-3.5" />
      Top
    </button>
  );
}

export function SiteFooter() {
  const exploreCol1 = impLinks.slice(0, 5);
  const exploreCol2 = impLinks.slice(5, 10);

  return (
    <footer
      className="relative w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Brand + primary nav */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Nelson Chime
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Manufacturing & process engineering · Research · Program management.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Navigate
              </p>
              <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-1" aria-label="Primary">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Explore (important links) — two columns */}
          <div className="md:col-span-4 md:col-start-6">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Explore
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-1">
              <div>
                {exploreCol1.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div>
                {exploreCol2.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div className="md:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Get in touch
              </p>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                For collaboration or inquiries.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} Nelson Chime. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <ScrollToTop />
            <a
              href="https://designloop.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              Website Designed by <strong>Shashank Singh</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
