"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MagicButton } from "../ui/magicButton";

interface HeroSectionProps {
  id?: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center py-20 md:py-32 text-center min-h-screen md:min-h-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeIn",
        }}
        className="flex flex-col items-center gap-4 px-4"
      >
        {/* Pebble Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 mb-4 px-6 py-2 rounded-full border 
                     border-zinc-300 dark:border-zinc-700 
                     bg-white/30 dark:bg-zinc-900/30 
                     text-zinc-800 dark:text-zinc-200 
                     shadow-sm backdrop-blur-md relative overflow-hidden 
                     flex items-center gap-2"
        >
          {/* Icon */}
          <Sparkles className="h-4 w-4 text-zinc-600 dark:text-zinc-300" />

          {/* Text */}
          <span className="relative z-10 font-medium">
            Empowering Innovation
          </span>

          {/* Shimmer Effect */}
          <motion.span
            animate={{ x: ["-150%", "150%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r 
               from-transparent via-white/40 to-transparent 
               dark:via-zinc-400/20 
               translate-x-[-150%]"
          />
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-white">
          Engineering Precision, Driving Programs, <br />
          Powering the Next Wave of Compute
        </h1>

        {/* Personal Intro */}
        <p className="mt-4 text-lg md:text-2xl font-light text-muted-foreground dark:text-neutral-300 max-w-2xl">
          I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="relative font-semibold text-transparent bg-clip-text 
             bg-gradient-to-r from-neutral-700 to-neutral-900 
             dark:from-neutral-200 dark:to-neutral-400"
          >
            Nelson Chimes
          </motion.span>
          , a mission-driven Technical Program Manager who turns ideas into
          execution—from concept through integration, testing, and scale.
        </p>

        {/* Optional Tagline */}
        <p className="mb-6 text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-muted-foreground dark:text-neutral-400 w-full">
          My Focus is leading teams, shape strategy, and architecting the solutions the programs that brings advanced
          infrastructure and next-gen AI Systems to life
        </p>

        {/* CTA Button */}
        <MagicButton onClick={() => (window.location.href = "/contact")}>
          Connect Now
        </MagicButton>
      </motion.div>
    </section>
  );
}
