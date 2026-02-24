import React from "react";

export interface ExperienceEntry {
  title: string;
  content: React.ReactNode;
}

function SkillPebbles({ skills }: { skills: string }) {
  const items = skills.split(" · ").map((s) => s.trim()).filter(Boolean);
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
            border border-sky-200/70 dark:border-sky-400/40
            bg-sky-50/70 dark:bg-sky-950/25
            text-sky-700 dark:text-sky-200
            shadow-sm shadow-sky-400/10 dark:shadow-sky-500/5
            hover:border-sky-300/80 dark:hover:border-sky-400/50
            hover:bg-sky-100/80 dark:hover:bg-sky-900/30
            transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "2024 – Present",
    content: (
      <div>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
          Sep 2024 – Present · Phoenix, Arizona, USA · On-site
        </p>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Lead Manufacturing Engineer – Ultrasonography · GE HealthCare
        </h4>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          Role focus: Advanced manufacturing & lean engineering in medical devices
        </p>
        <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
          <li>Leading manufacturing engineering initiatives for ultrasonography systems</li>
          <li>Driving lean manufacturing practices to improve throughput, yield, and process reliability</li>
          <li>Collaborating with quality, design, supply chain, and operations teams</li>
          <li>Supporting production scalability and continuous improvement initiatives</li>
          <li>Applying structured problem-solving methodologies in a regulated medical environment</li>
        </ul>
        <SkillPebbles skills="Lean Manufacturing · Process Optimization · Cross-functional Leadership · Medical Device Manufacturing" />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
          Sep 2022 – Aug 2024 (2 years) · Maine, USA · Hybrid
        </p>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Graduate Research Assistant / Engineer · University of Maine System
        </h4>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          Role focus: Engineering research, process modeling & project execution
        </p>
        <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
          <li>Conducted applied engineering research with real-world industrial relevance</li>
          <li>Developed Process Flow Diagrams (PFDs) and technical documentation</li>
          <li>Applied project management principles to research planning and execution</li>
          <li>Collaborated with academic and industry stakeholders</li>
          <li>Supported data-driven decision making through experimental analysis</li>
        </ul>
        <SkillPebbles skills="PFD · Project Management · Engineering Research · Technical Reporting · Cross-functional Collaboration" />
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Sep 2022 – Aug 2024 · Maine, USA · Hybrid
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Graduate Research Assistant / Engineer · University of Maine System
          </h4>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Started applied engineering research; PFDs, technical documentation, project management in research, and collaboration with academic and industry stakeholders.
          </p>
        </div>
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Dec 2021 – Apr 2022 (5 months) · Kazan, Tatarstan, Russia · Remote
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Product Manager (Part-Time) · WeOut Group
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Role focus: Product strategy & agile delivery
          </p>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-1 list-disc pl-4">
            <li>Defined product strategy and feature roadmaps</li>
            <li>Translated business needs into product requirements; worked with engineering and design</li>
            <li>Managed agile sprints and feature prioritization; balanced user needs, feasibility, and business goals</li>
          </ul>
          <SkillPebbles skills="Product Strategy · Agile · Product Lifecycle · Stakeholder Alignment" />
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Dec 2021 – Apr 2022 (5 months) · Kazan, Tatarstan, Russia · Remote
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Product Manager (Part-Time) · WeOut Group
          </h4>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-1 list-disc pl-4">
            <li>Product strategy, feature roadmaps, and requirements</li>
            <li>Agile sprints, prioritization; alignment with engineering and design</li>
          </ul>
        </div>
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Sep 2019 – May 2021 (1 yr 9 mo) · Kazan, Russia · Hybrid
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Undergraduate Research Assistant · Kazan National Research Technological University
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Department: Petrochemical Laboratory – Faculty of Petroleum & Petrochemistry
          </p>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
            <li>Supported petrochemical process research projects</li>
            <li>Designed and analyzed process flow diagrams (PFDs)</li>
            <li>Assisted in experimental setup and data interpretation</li>
            <li>Contributed to technical documentation and presentations</li>
            <li>Built strong fundamentals in chemical and process engineering</li>
          </ul>
          <SkillPebbles skills="Process Engineering · PFD Development · Technical Communication · Research Methodology" />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Aug 2020 – Sep 2020 (2 months) · Kazan, Russia · Hybrid
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Process Engineer Intern · SIBUR
          </h4>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
            <li>Supported industrial process engineering teams</li>
            <li>Developed and reviewed process flow diagrams (PFDs)</li>
            <li>Worked with AutoCAD and CAD tools for process layouts</li>
            <li>Assisted in plant process analysis and optimization tasks</li>
            <li>Gained hands-on exposure to large-scale petrochemical operations</li>
          </ul>
          <SkillPebbles skills="AutoCAD · CAD · Process Engineering · Industrial Documentation" />
        </div>
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Jul 2019 – Nov 2022 · Owerri, Imo State, Nigeria · Remote
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Program Manager (Part-Time) · Autoxona
          </h4>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-1 list-disc pl-4">
            <li>Led multi-phase programs; Agile project management; coordinated remote teams</li>
            <li>Managed timelines, deliverables, and stakeholder communication</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Jun 2019 – Aug 2019 (3 months) · Kazan, Russia · Hybrid
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Process Engineer Intern · SIBUR
          </h4>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
            <li>Supported industrial process engineering teams</li>
            <li>Developed and reviewed process flow diagrams (PFDs); AutoCAD and CAD for process layouts</li>
            <li>Assisted in plant process analysis and optimization; hands-on petrochemical operations</li>
          </ul>
          <SkillPebbles skills="AutoCAD · CAD · Process Engineering · Industrial Documentation" />
        </div>
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Jul 2019 – Nov 2022 · Owerri, Imo State, Nigeria · Remote
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Program Manager (Part-Time) · Autoxona
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Role focus: Program & project leadership in a startup environment
          </p>
          <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 list-disc pl-4">
            <li>Led multi-phase programs from ideation to execution</li>
            <li>Applied Agile project management methodologies</li>
            <li>Coordinated cross-functional remote teams</li>
            <li>Managed timelines, deliverables, and stakeholder communication</li>
            <li>Strengthened internal workflows and execution discipline</li>
          </ul>
          <SkillPebbles skills="Agile · Program Planning & Execution · Stakeholder Management" />
        </div>
        <div>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Sep 2019 – May 2021 · Kazan, Russia · Hybrid
          </p>
          <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Undergraduate Research Assistant · Kazan National Research Technological University
          </h4>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Petrochemical Laboratory – PFDs, experiments, technical documentation, process engineering fundamentals.
          </p>
        </div>
      </div>
    ),
  },
];
