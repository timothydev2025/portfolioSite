"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SkillLevel {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  items: string[];
}

// ─── Levels L1–L5 ─────────────────────────────────────────────────────────────
const coreLevels: SkillLevel[] = [
  {
    id: "L1",
    label: "Level 01",
    title: "System Ownership",
    subtitle: "End-to-End Compute Platform Delivery",
    items: [
      "End-to-End Compute Platform Delivery",
      "Silicon → System → Rack → Cluster → Production",
      "Cross-Functional Program Leadership (HW, SW, Ops)",
    ],
  },
  {
    id: "L2",
    label: "Level 02",
    title: "Technical Fluency",
    subtitle: "TPM-Appropriate Architecture Awareness",
    items: [
      "CPU / GPU / Accelerator Architecture Awareness",
      "Interconnects: PCIe, NVLink, Infinity Fabric",
      "HBM, Memory Bandwidth & Power Constraints",
      "Platform Firmware & Bring-Up Sequencing",
    ],
  },
  {
    id: "L3",
    label: "Level 03",
    title: "Datacenter Reality",
    subtitle: "Physical Infrastructure & Deployment Mastery",
    items: [
      "Power Density & Thermal Envelope Planning",
      "Air vs Liquid Cooling Trade-offs",
      "Serviceability, MTBF, Failure Domains",
      "Deployment Readiness & Customer Enablement",
    ],
  },
  {
    id: "L4",
    label: "Level 04",
    title: "Program Execution",
    subtitle: "Multi-Site, Multi-Timezone Delivery",
    items: [
      "EVT / DVT / PVT Gate Ownership",
      "Multi-Site, Multi-Timezone Execution",
      "Risk Topology & Critical Path Management",
      "Executive Status Synthesis & Escalation",
    ],
  },
  {
    id: "L5",
    label: "Level 05",
    title: "Business Alignment",
    subtitle: "Strategic & Financial Decision Fluency",
    items: [
      "Performance / Cost / Schedule Trade-offs",
      "Supply Chain Constraints & Ramp Planning",
      "CapEx vs Time-to-Revenue Decisions",
    ],
  },
];

// ─── Level 6 Sub-sections ─────────────────────────────────────────────────────
const level6Subs: SkillLevel[] = [
  {
    id: "6.1",
    label: "6.1",
    title: "Core Tools",
    subtitle: "Used Like Instruments, Not Crutches",
    items: [
      "Lucidchart · Draw.io · Excalidraw · Figma",
      "Jira / Azure DevOps · Smartsheet / MS Project",
      "Excel (advanced) · SQL · Python",
      "Yield, capacity, and burn-down modeling",
      "Power/thermal calculators & capacity planning models",
      "One-page status briefs · Decision memos · Risk heatmaps",
    ],
  },
  {
    id: "6.2",
    label: "6.2",
    title: "Executive Communication",
    subtitle: "Cognitive & Communication Patterns",
    items: [
      "Synthesis over reporting — signal extraction from noise",
      "Framing decisions, not problems",
      "Anticipating second-order consequences",
      "Engineers → precision & constraints",
      "Directors → trade-offs & timing",
      "VPs/SVPs → decisions, confidence, downside risk",
    ],
  },
  {
    id: "6.3",
    label: "6.3",
    title: "Stakeholder & Org Dynamics",
    subtitle: "High-EQ Leadership",
    items: [
      "Align incentives before debating solutions",
      "Surface unspoken constraints",
      "Read political topology early",
      "De-personalize technical disagreements",
      "Convert friction into structured decisions",
      "Protect psychological safety without lowering standards",
    ],
  },
  {
    id: "6.4",
    label: "6.4",
    title: "Decision Architecture",
    subtitle: "Elite Judgment & Trade-Off Mastery",
    items: [
      "Reversible vs irreversible classification",
      "When to slow down vs force convergence",
      "Knowing when not to escalate",
      "Performance vs yield · Schedule vs reliability",
      "Cost vs optionality · Local vs system health",
      "Most failures: late decisions, not wrong ones",
    ],
  },
  {
    id: "6.5",
    label: "6.5",
    title: "Risk & Ambiguity Intelligence",
    subtitle: "Perception, Modeling & Adaptation",
    items: [
      "Identify unknown-unknowns early",
      "Separate technical risk from organizational risk",
      "Model blast radius, not just probability",
      "Dynamic re-planning without thrash",
      "Graceful degradation strategies",
      "Maintaining credibility under uncertainty",
    ],
  },
  {
    id: "6.6",
    label: "6.6",
    title: "Business & Strategic Literacy",
    subtitle: "Financial Fluency & Executive Trust",
    items: [
      "CapEx vs OpEx reasoning",
      "Cost of delay math",
      "ROI framing for technical choices",
      "Supply chain fragility awareness",
      "Speak in outcomes, not effort",
      "Never surprise leadership late",
    ],
  },
  {
    id: "6.7",
    label: "6.7",
    title: "Personal Operating System",
    subtitle: "Elite Self-Management",
    items: [
      "Structured thinking (first principles, decomposition)",
      "Writing before speaking on complex issues",
      "Decision logs and retrospectives",
      "Calm under escalation · Non-defensive posture",
      "Consistent tone in high-stakes rooms",
      "Emotional regulation as a professional asset",
    ],
  },
];

// ─── Level Card ───────────────────────────────────────────────────────────────
function LevelCard({
  level,
  variant = "core",
  popupSide = "top",
}: {
  level: SkillLevel;
  variant?: "core" | "sub";
  popupSide?: "top" | "bottom";
}) {
  const [hovered, setHovered] = useState(false);
  const previewCount = variant === "core" ? 1 : 2;

  return (
    <div
      className="relative"
      style={{ zIndex: hovered ? 50 : 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card body */}
      <div
        className={`
          h-full pt-5 pb-6 cursor-default select-none
          border-t-2 transition-colors duration-200
          ${hovered
            ? "border-zinc-800 dark:border-zinc-100"
            : "border-zinc-200 dark:border-zinc-800"
          }
        `}
      >
        <span className="block font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500 mb-3">
          {level.label}
        </span>

        <h3
          className={`font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 leading-snug ${
            variant === "core" ? "text-base" : "text-[15px]"
          }`}
        >
          {level.title}
        </h3>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
          {level.subtitle}
        </p>

        {/* Preview pebbles */}
        <div className="flex flex-wrap gap-1.5">
          {level.items.slice(0, previewCount).map((item) => (
            <span
              key={item}
              className="inline-block text-xs px-2.5 py-0.5 rounded-full
                border border-zinc-200 dark:border-zinc-800
                text-zinc-500 dark:text-zinc-400 leading-relaxed"
            >
              {item.length > 26 ? item.slice(0, 26) + "…" : item}
            </span>
          ))}
          {level.items.length > previewCount && (
            <span
              className="inline-block text-xs px-2.5 py-0.5 rounded-full
                border border-zinc-200 dark:border-zinc-800
                text-zinc-400 dark:text-zinc-600 leading-relaxed"
            >
              +{level.items.length - previewCount}
            </span>
          )}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: popupSide === "top" ? 6 : -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: popupSide === "top" ? 6 : -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className={`
              absolute left-0 w-72
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50
              p-5 pointer-events-none
              ${popupSide === "top"
                ? "bottom-[calc(100%+10px)]"
                : "top-[calc(100%+10px)]"
              }
            `}
            style={{ zIndex: 100 }}
          >
            {/* Arrow */}
            <div
              className={`
                absolute left-5 w-2.5 h-2.5 rotate-45
                bg-white dark:bg-zinc-900
                border-zinc-200 dark:border-zinc-800
                ${popupSide === "top"
                  ? "bottom-[-5px] border-b border-r"
                  : "top-[-5px] border-t border-l"
                }
              `}
            />

            <div className="flex items-baseline gap-2 mb-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                {level.label}
              </span>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {level.title}
              </span>
            </div>

            <ul className="space-y-2">
              {level.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
                  <span className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
interface SkillSectionMainProps {
  id?: string;
}

export default function SkillSectionMain({ id }: SkillSectionMainProps) {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 bg-white dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          {/* Badge */}
          <div
            className="group relative mb-6 px-5 py-2.5 rounded-full
              border-2 border-zinc-200/60 dark:border-zinc-700/40
              bg-zinc-50/80 dark:bg-zinc-800/20 backdrop-blur-xl
              text-zinc-700 dark:text-zinc-300
              shadow-sm shadow-black/5
              hover:border-purple-400/40 dark:hover:border-purple-500/30
              transition-all duration-400 ease-out
              flex items-center gap-2.5 overflow-hidden w-fit
              before:absolute before:inset-0 before:rounded-full
              before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent
              dark:before:from-white/10 dark:before:to-transparent before:pointer-events-none"
          >
            <Sparkles className="relative z-10 h-4 w-4 text-zinc-500 dark:text-zinc-400 group-hover:text-purple-500 transition-colors duration-300" />
            <span className="relative z-10 text-sm font-semibold tracking-wide uppercase group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              Skills
            </span>
          </div>

          {/* Domain title */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 max-w-2xl">
            GPU Infrastructure &amp; Datacenter Systems Leadership
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
            Silicon → Chip → System → Rack → Cluster → Production Deployment
          </p>
        </motion.div>

        {/* ── L1–L5 grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-0 overflow-visible">
            {coreLevels.map((level) => (
              <LevelCard key={level.id} level={level} variant="core" popupSide="top" />
            ))}
          </div>
        </motion.div>

        {/* ── Divider + Level 6 header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 mb-10 border-t border-zinc-200 dark:border-zinc-800 pt-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5 mb-1">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
              Level 06
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Tools, Cognitive Skills &amp; Executive Operating Behavior
            </h3>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            Hover each sub-section to see details
          </p>
        </motion.div>

        {/* ── L6 sub-grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-0 overflow-visible">
            {level6Subs.map((sub) => (
              <LevelCard key={sub.id} level={sub} variant="sub" popupSide="top" />
            ))}
          </div>
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900"
        >
          <p className="font-mono text-xs tracking-wide text-zinc-400 dark:text-zinc-500 italic">
            &ldquo;Technical Program Management for Complex, Multi-Disciplinary Systems&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
