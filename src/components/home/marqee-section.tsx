"use client";

import { motion } from "framer-motion";

interface MarqueeSectionProps {
  id?: string;
  items?: string[];
}

export default function MarqueeSection({
  items = [
    "ReactJS",
    "NextJS",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "NodeJS",
    "NestJS",
    "GraphQL",
    "Microservices",
    "CI/CD",
  ],
}: MarqueeSectionProps) {
  return (
    <section className="w-full overflow-hidden py-12 md:py-16">
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-6 md:gap-8 text-base md:text-lg font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <span
              key={idx}
              className="px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl 
                         bg-card border border-border
                         shadow-sm hover:shadow-md
                         text-card-foreground
                         transition-shadow duration-200"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
