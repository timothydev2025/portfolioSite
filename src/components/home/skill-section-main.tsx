"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Sparkles,
  CircuitBoard,
  Users,
  Atom,
  Bot,
  TestTube,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bentogrid";

interface SkillSectionMainProps {
  id?: string;
}

const skills = [
  {
    Icon: CircuitBoard,
    name: "AI Hardware Systems Expertise",
    description:
      "Designing and optimizing AI-driven hardware systems for cutting-edge applications.",
    href: "#",
    cta: "86%",
    className: "col-span-3 lg:col-span-2",
    features: [
      "AI accelerator architecture design",
      "Neural network hardware optimization",
      "System-on-Chip (SoC) integration",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-purple-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
  {
    Icon: Cpu,
    name: "Advanced Manufacturing Engineer",
    description:
      "Medical Device Chips - Leading precision manufacturing of next-generation medical device semiconductors.",
    href: "#",
    cta: "75%",
    className: "col-span-3 lg:col-span-1",
    features: [
      "Semiconductor process optimization",
      "Quality control & testing protocols",
      "Medical device compliance & standards",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-cyan-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
  {
    Icon: Users,
    name: "Technical Program Manager",
    description:
      "Bridging engineering innovation with program strategy to deliver impactful solutions.",
    href: "#",
    cta: "80%",
    className: "col-span-3 lg:col-span-1",
    features: [
      "Cross-functional team leadership",
      "Agile project management",
      "Stakeholder communication & reporting",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-yellow-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
  {
    Icon: Atom,
    name: "Chemical & Material Engineer",
    description:
      "Nanofabrication - Expertise in nanoscale material engineering and advanced fabrication techniques.",
    href: "#",
    cta: "70%",
    className: "col-span-3 lg:col-span-2",
    features: [
      "Thin film deposition & etching",
      "Nanomaterial synthesis & characterization",
      "Cleanroom process development",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-blue-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
  {
    Icon: Bot,
    name: "Machine Learning Engineer",
    description:
      "Building intelligent systems and models that drive innovation in hardware and AI integration.",
    href: "#",
    cta: "72%",
    className: "col-span-3 lg:col-span-1",
    features: [
      "Deep learning model development",
      "Computer vision & NLP applications",
      "Model optimization & deployment",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-fuchsia-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
  {
    Icon: TestTube,
    name: "R&D Engineer",
    description:
      "Chips & Electrochemical Systems - Research and development of advanced chip technologies and electrochemical solutions.",
    href: "#",
    cta: "65%",
    className: "col-span-3 lg:col-span-2",
    features: [
      "Novel chip architecture prototyping",
      "Electrochemical sensor development",
      "Patent research & technical documentation",
    ],
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-red-500/15 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-800/30" />
    ),
  },
];

export default function SkillSectionMain({ id }: SkillSectionMainProps) {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 bg-white dark:bg-transparent"
    >
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        {/* Enhanced Pebble Badge with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mb-8 px-6 py-3 rounded-full 
                     border-2 border-neutral-200 dark:border-neutral-700
                     bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-xl 
                     text-neutral-800 dark:text-neutral-200
                     shadow-lg shadow-black/5 dark:shadow-black/20
                     hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/15
                     hover:border-purple-400/50 dark:hover:border-purple-500/40
                     transition-all duration-500 ease-out
                     flex items-center gap-3 overflow-hidden
                     before:absolute before:inset-0 before:rounded-full 
                     before:bg-gradient-to-br before:from-white/25 before:via-white/10 before:to-transparent 
                     dark:before:from-white/15 dark:before:via-white/5 dark:before:to-transparent
                     before:pointer-events-none before:transition-all before:duration-500
                     hover:before:from-purple-400/20 hover:before:via-purple-300/10 hover:before:to-transparent
                     dark:hover:before:from-purple-500/15 dark:hover:before:via-purple-400/8 dark:hover:before:to-transparent"
        >
          {/* Purple gradient overlay on hover */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-400/0 to-purple-500/0 
                          group-hover:from-purple-500/5 group-hover:via-purple-400/10 group-hover:to-purple-500/5
                          dark:group-hover:from-purple-400/8 dark:group-hover:via-purple-300/15 dark:group-hover:to-purple-400/8
                          transition-all duration-500 ease-out pointer-events-none"
          />

          <Sparkles
            className="relative z-10 h-5 w-5 text-neutral-600 dark:text-neutral-400
                              group-hover:text-purple-500 dark:group-hover:text-purple-400
                              transition-colors duration-300"
          />
          <span
            className="relative z-10 font-semibold tracking-wide
                          group-hover:text-purple-600 dark:group-hover:text-purple-400
                          transition-colors duration-300"
          >
            Skills
          </span>
        </motion.div>

        {/* Improved Tagline - Italic and Elegant with Gradient Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl italic font-light leading-relaxed"
        >
          &quot;Bridging{" "}
          <motion.span
            className="font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 
                       dark:from-blue-400 dark:via-blue-600 dark:to-blue-800 
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
            hardware innovation
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 
                       dark:from-blue-400 dark:via-blue-600 dark:to-blue-800 
                       bg-clip-text text-transparent
                       inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.5,
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            AI systems
          </motion.span>{" "}
          to create cutting-edge solutions&quot;
        </motion.p>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <BentoGrid className="max-w-7xl mx-auto">
            {skills.map((skill, idx) => (
              <BentoCard key={idx} {...skill} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
