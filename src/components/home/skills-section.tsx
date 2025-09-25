"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { name: "ReactJS", level: "90%" },
  { name: "NextJS", level: "85%" },
  { name: "TypeScript", level: "80%" },
  { name: "TailwindCSS", level: "95%" },
  { name: "Framer", level: "75%" },
  { name: "NodeJS", level: "88%" },
  { name: "GraphQL", level: "70%" },
  { name: "NestJS", level: "72%" },
  { name: "CI/CD", level: "65%" },
];

interface SkillSectionProps {
  id?: string;
}

export default function SkillSection({ id }: SkillSectionProps) {
  return (
    <motion.section
      id={id}
      className="py-20 md:py-32 bg-white dark:bg-zinc-950"
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 100,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
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
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left side: Heading + description */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            y: 50,
            scale: 0.9,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
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
          className="flex flex-col gap-6 text-center md:text-left mt-8"
        >
          {/* Enhanced Skills Badge with Glass Effect */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 30,
              rotateZ: -10,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateZ: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            className="group relative mb-4 px-6 py-3 rounded-full 
                       border-2 border-zinc-300/40 dark:border-zinc-600/40 
                       bg-zinc-100/20 dark:bg-zinc-800/20 backdrop-blur-xl 
                       text-zinc-800 dark:text-zinc-200 
                       shadow-lg shadow-black/5 dark:shadow-black/20
                       hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/15
                       hover:border-blue-400/50 dark:hover:border-blue-500/40
                       transition-all duration-500 ease-out
                       flex items-center gap-3 overflow-hidden w-fit mx-auto md:mx-0
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

            <Code2
              className="relative z-10 h-5 w-5 text-zinc-600 dark:text-zinc-400 
                                group-hover:text-blue-500 dark:group-hover:text-blue-400
                                transition-colors duration-300"
            />
            <span
              className="relative z-10 font-semibold tracking-wide uppercase
                            group-hover:text-blue-600 dark:group-hover:text-blue-400
                            transition-colors duration-300"
            >
              Skills
            </span>
          </motion.div>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto md:mx-0">
            A snapshot of the technologies and tools I work with to build
            scalable, modern applications.
          </p>
        </motion.div>

        {/* Right side: Skill Cards */}
        <motion.div
          className="grid grid-cols-3 gap-2 md:gap-4 justify-center md:justify-start mt-8 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
              x: 100,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              scale: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.12,
                delayChildren: 0.8,
              },
            },
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group relative aspect-square rounded-[2rem] cursor-pointer overflow-hidden
                         bg-white/80 dark:bg-zinc-900/80 
                         border-2 border-zinc-200/60 dark:border-zinc-700/60
                         shadow-md hover:shadow-xl hover:shadow-cyan-300/20 dark:hover:shadow-cyan-400/15
                         hover:border-cyan-300/60 dark:hover:border-cyan-400/50
                         transition-all duration-500 ease-out"
              whileHover={{ scale: 1.05 }}
              initial="rest"
              animate="rest"
              variants={{
                rest: {},
                hover: {},
              }}
            >
              {/* Cyan gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-200/0 via-cyan-100/0 to-cyan-200/0 
                              group-hover:from-cyan-200/10 group-hover:via-cyan-100/15 group-hover:to-cyan-200/10
                              dark:group-hover:from-cyan-300/8 dark:group-hover:via-cyan-200/12 dark:group-hover:to-cyan-300/8
                              transition-all duration-500 ease-out pointer-events-none"
              />
              {/* Default content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3"
                variants={{
                  rest: { opacity: 1, y: 0 },
                  hover: { opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">
                  {skill.level}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  {skill.name}
                </span>
              </motion.div>

              {/* Hover content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem]
                           bg-gradient-to-br from-cyan-300 via-cyan-200 to-cyan-400
                           dark:from-cyan-200 dark:via-cyan-100 dark:to-cyan-300
                           shadow-lg shadow-cyan-200/30 dark:shadow-cyan-300/20"
                variants={{
                  rest: { opacity: 0, scale: 1.05 },
                  hover: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Subtle pattern overlay - reduced opacity */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)] rounded-[2rem]" />

                <div className="relative z-10 text-center space-y-1">
                  <motion.span
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900 dark:text-cyan-800"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {skill.level}
                  </motion.span>
                  <motion.span
                    className="text-xs sm:text-sm md:text-base font-medium text-cyan-800 dark:text-cyan-700 uppercase tracking-wide"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    {skill.name}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="col-span-full mt-16 flex justify-center"
        >
          <motion.div
            className="relative text-lg md:text-xl font-light italic text-zinc-500 dark:text-zinc-400 text-center cursor-pointer
                       px-6 py-3 rounded-full transition-all duration-500 ease-out"
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onHoverStart={() => {
              // Trigger background animation
            }}
            animate={{
              backgroundSize: ["0% 100%", "100% 100%", "0% 100%"],
            }}
            whileInView={{
              color: ["#71717a", "#0891b2", "#71717a"],
              backgroundSize: ["0% 100%", "100% 100%", "0% 100%"],
            }}
            viewport={{ once: false }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{
                textShadow: "0 0 8px rgba(6, 182, 212, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              "Every individual's hard work weaves the bigger story of life."
            </motion.span>

            {/* Subtle underline effect */}
            <motion.div
              className="absolute bottom-1 left-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: 0, x: "-50%" }}
              whileHover={{
                width: "80%",
                opacity: [0, 1, 0.7],
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
