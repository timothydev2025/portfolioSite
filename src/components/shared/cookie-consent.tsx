"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div
            className="relative bg-white/10 dark:bg-neutral-900/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/30 p-6
                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent 
                         dark:before:from-white/20 dark:before:via-white/5 dark:before:to-transparent
                         before:pointer-events-none
                         after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-transparent after:via-white/5 after:to-white/20
                         dark:after:from-transparent dark:after:via-white/2 dark:after:to-white/10
                         after:pointer-events-none"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              <X className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
            </button>

            {/* Cookie icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                Cookie Preferences
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. By continuing to use our site,
              you consent to our use of cookies.
            </p>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-white/20 dark:bg-zinc-800/20 backdrop-blur-2xl hover:bg-white/30 dark:hover:bg-zinc-700/30 rounded-lg transition-all duration-200 border border-white/30 dark:border-white/10 shadow-lg relative cursor-pointer
                           before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent before:pointer-events-none"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600/70 to-blue-700/70 hover:from-blue-700/80 hover:to-blue-800/80 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl backdrop-blur-2xl relative cursor-pointer
                           before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent before:pointer-events-none"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
