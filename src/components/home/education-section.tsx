"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

interface EducationEntry {
  index: string;        // "01" "02" "03"
  badge: string;        // "MSc" "B.Eng" "PMP"
  type: "degree" | "cert";
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

const educationData: EducationEntry[] = [
  {
    index: "01",
    badge: "MSc",
    type: "degree",
    institution: "University of Maine",
    degree: "Master of Science — Engineering",
    period: "Sep 2022 – Aug 2024",
    location: "Maine, USA",
    description:
      "Completed graduate studies while serving as Graduate Research Assistant / Engineer — focusing on process system modeling, technical analysis, and complex engineering research with real-world industrial application.",
  },
  {
    index: "02",
    badge: "B.Eng",
    type: "degree",
    institution: "Kazan National Research Technological University",
    degree: "Bachelor of Engineering — Chemical & Process Engineering",
    period: "Sep 2019 – May 2021",
    location: "Kazan, Tatarstan, Russia",
    description:
      "Undergraduate engineering education with deep involvement in petrochemical process research, hands-on laboratory work, and technical documentation in the Faculty of Petroleum & Petrochemistry.",
  },
  {
    index: "03",
    badge: "PMP",
    type: "cert",
    institution: "Project Management Institute",
    degree: "Project Management Professional",
    period: "≈ 2019 – 2022",
    location: "Global Credential",
    description:
      "Globally recognised certification demonstrating advanced expertise in structured project planning, cross-functional leadership, risk management, and disciplined execution across complex, multi-disciplinary programs.",
  },
];

export default function EducationSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 bg-white dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* ── Header row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-zinc-200 dark:border-zinc-800"
        >
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-zinc-400 dark:bg-zinc-600" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Education
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Academic &amp;<br className="hidden md:block" /> Professional
              Credentials
            </h2>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed md:text-right">
            Built across two continents — from petrochemical engineering in
            Russia to graduate research in the United States.
          </p>
        </motion.div>

        {/* ── Entries ── */}
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
          {educationData.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 cursor-default"
            >
              {/* Col 1 — index + badge (md: 2 cols) */}
              <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:pt-1">
                <span className="font-mono text-xs text-zinc-300 dark:text-zinc-700 tabular-nums select-none">
                  {item.index}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                    text-[10px] font-bold tracking-[0.1em] uppercase
                    ${item.type === "cert"
                      ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-700/40"
                      : "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200/70 dark:border-sky-700/40"
                    }`}
                >
                  {item.type === "cert"
                    ? <Award className="h-3 w-3" />
                    : <GraduationCap className="h-3 w-3" />
                  }
                  {item.badge}
                </span>
              </div>

              {/* Col 2 — institution + degree (md: 4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-start md:pt-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-snug mb-1
                  group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200">
                  {item.institution}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.degree}
                </p>
              </div>

              {/* Col 3 — period + location (md: 2 cols) */}
              <div className="md:col-span-2 flex md:flex-col gap-1 md:pt-1">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-relaxed">
                  {item.period}
                </span>
                <span className="hidden md:block font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wide">
                  {item.location}
                </span>
              </div>

              {/* Col 4 — description (md: 4 cols) */}
              <div className="md:col-span-4 md:pt-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover left accent bar */}
              <div
                className={`hidden md:block absolute left-6 md:left-8 w-[2px] h-0 group-hover:h-full
                  transition-all duration-300 ease-out origin-top rounded-full
                  ${item.type === "cert"
                    ? "bg-amber-400/60"
                    : "bg-sky-400/60"
                  }`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
