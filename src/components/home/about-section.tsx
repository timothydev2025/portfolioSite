"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 mx-4 md:mx-8 my-8 md:my-12 rounded-3xl"
    >
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        {/* Enhanced Pebble Badge with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mb-8 px-6 py-3 rounded-full 
                     border-2 border-white/30 dark:border-zinc-600/40 
                     bg-white/10 dark:bg-zinc-800/20 backdrop-blur-xl 
                     text-zinc-100 dark:text-zinc-800 
                     shadow-lg shadow-black/10 dark:shadow-black/20
                     hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/15
                     hover:border-blue-400/50 dark:hover:border-blue-500/40
                     transition-all duration-500 ease-out
                     flex items-center gap-3 overflow-hidden
                     before:absolute before:inset-0 before:rounded-full 
                     before:bg-gradient-to-br before:from-white/25 before:via-white/10 before:to-transparent 
                     dark:before:from-white/15 dark:before:via-white/5 dark:before:to-transparent
                     before:pointer-events-none before:transition-all before:duration-500
                     hover:before:from-blue-400/20 hover:before:via-blue-300/10 hover:before:to-transparent
                     dark:hover:before:from-blue-500/15 dark:hover:before:via-blue-400/8 dark:hover:before:to-transparent"
        >
          {/* Blue gradient overlay on hover */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-400/0 to-blue-500/0 
                          group-hover:from-blue-500/5 group-hover:via-blue-400/10 group-hover:to-blue-500/5
                          dark:group-hover:from-blue-400/8 dark:group-hover:via-blue-300/15 dark:group-hover:to-blue-400/8
                          transition-all duration-500 ease-out pointer-events-none"
          />

          <Sparkles
            className="relative z-10 h-5 w-5 text-zinc-200 dark:text-zinc-600 
                              group-hover:text-blue-200 dark:group-hover:text-blue-500
                              transition-colors duration-300"
          />
          <span
            className="relative z-10 font-semibold tracking-wide
                          group-hover:text-blue-100 dark:group-hover:text-blue-600
                          transition-colors duration-300"
          >
            About Me
          </span>
        </motion.div>

        {/* Improved Tagline - Italic and Elegant with Gradient Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-xl md:text-2xl text-zinc-300 dark:text-zinc-600 mb-16 max-w-3xl italic font-light leading-relaxed"
        >
          "Passionate about transforming complex challenges into elegant,
          scalable solutions that drive{" "}
          <motion.span
            className="font-bold bg-gradient-to-r from-blue-400 via-blue-800 to-blue-900 
                       dark:from-blue-500 dark:via-blue-800 dark:to-blue-900 
                       bg-clip-text text-transparent
                       inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            meaningful innovation
          </motion.span>
          ."
        </motion.p>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 max-w-6xl w-full">
          {/* Left - Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:w-1/2 space-y-6"
          >
            <p className="text-base md:text-lg text-zinc-200 dark:text-zinc-800 leading-relaxed text-justify">
              I'm{" "}
              <span className="font-bold italic text-zinc-100 dark:text-zinc-700">
                Nelson Chimes
              </span>
              , a Senior Technical Program Manager with years of experience
              driving innovative projects at the intersection of technology and
              business. I focus on delivering high-impact solutions while
              mentoring teams and fostering collaboration across diverse,
              dynamic environments.
            </p>
            <p className="text-base md:text-lg text-zinc-200 dark:text-zinc-800 leading-relaxed text-justify">
              As a Senior Engineer, I specialize in architecting robust
              full-stack systems, designing scalable solutions, and
              leading agile development teams. I excel at breaking down complex
              technical challenges and delivering reliable, maintainable
              software that drives business success and empowers teams to
              achieve their goals.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 ring-1 ring-white/10 dark:ring-zinc-700/30 bg-white/5 dark:bg-zinc-800/20 backdrop-blur-md">
              <img
                src="/person-image.jpg" // Replace with actual image path
                alt="Nelson Chimes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Glass overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 dark:from-black/20 dark:via-transparent dark:to-white/2 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
