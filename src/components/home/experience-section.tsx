"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/lib/experienceData";

export default function ExperienceSection({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 py-8 md:py-16"
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
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24"
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
        <Timeline data={experienceData} />
      </motion.div>
    </motion.section>
  );
}
