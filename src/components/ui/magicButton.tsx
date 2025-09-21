"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface MagicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MagicButton({
  children,
  onClick,
  className,
}: MagicButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-3 flex items-center justify-center gap-2",
        "bg-white dark:bg-slate-900",
        "text-black dark:text-white font-medium",
        "border border-neutral-200 dark:border-slate-700",
        "transition-all duration-300 ease-in-out",
        "shadow-sm hover:shadow-lg group",
        className
      )}
    >
      {/* Hover Gradient Border */}
      <span
        className="absolute inset-0 rounded-full border border-transparent 
                   group-hover:border-transparent 
                   group-hover:bg-gradient-to-r from-blue-400/30 via-blue-500/40 to-indigo-500/30 
                   dark:from-blue-300/30 dark:via-blue-400/30 dark:to-indigo-400/30 
                   pointer-events-none transition-all duration-500"
      />

      {/* Shimmer effect */}
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 h-full w-[35%] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 pointer-events-none"
      />

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Arrow icon (appears on button hover) */}
      <span className="relative z-10 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <ArrowRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
}
