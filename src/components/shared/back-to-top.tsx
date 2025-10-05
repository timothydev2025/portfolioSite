"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/20 dark:bg-neutral-900/20 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/30
                     hover:bg-white/30 dark:hover:bg-neutral-800/30 hover:scale-110 transition-all duration-300 cursor-pointer
                     before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent 
                     dark:before:from-white/20 dark:before:via-white/5 dark:before:to-transparent
                     before:pointer-events-none
                     after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-transparent after:via-white/5 after:to-white/20
                     dark:after:from-transparent dark:after:via-white/2 dark:after:to-white/10
                     after:pointer-events-none"
        >
          <ArrowUp className="w-5 h-5 text-zinc-700 dark:text-zinc-300 mx-auto relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
