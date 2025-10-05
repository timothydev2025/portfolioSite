"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PulsatingButton } from "@/components/ui/pulsating-button";

export default function NewsletterSection({ id }: { id: string }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <motion.section
      id={id}
      className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 py-8 sm:py-12 md:py-16 lg:py-20"
      initial={{
        opacity: 0,
        y: 100,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.0,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left side - Heading and description */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Subscribe to Nelson's Newsletter
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My weekly newsletter about creativity and engineering
              </motion.p>
            </div>

            {/* Right side - Email form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-md sm:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                  />
                  <PulsatingButton
                    type="submit"
                    className="px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap text-sm sm:text-base"
                  >
                    Subscribe
                  </PulsatingButton>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Join thousands of readers. No spam, unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
