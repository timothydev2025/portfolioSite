import React from "react";

export interface ExperienceEntry {
  title: string;
  content: React.ReactNode;
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "2024",
    content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Senior Frontend Engineer - Aceternity
        </h4>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Led the development of scalable UI components and design systems using
          React, Next.js, and Tailwind. Improved performance and accessibility
          across multiple products.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
          Architected component libraries that reduced development time by 40%
          and established coding standards that improved code quality across the
          engineering team. Mentored junior developers and conducted technical
          interviews for new team members.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Lead Frontend Developer - TechCorp
        </h4>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Managed a team of 5 developers and architected complex web
          applications. Implemented micro-frontend architecture and established
          coding standards.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
          Led the migration from monolithic to microservices architecture,
          resulting in 60% faster deployment times and improved system
          reliability. Collaborated with product managers and designers to
          define technical requirements and project timelines.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Frontend Developer – StartupX
        </h4>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Built and launched customer-facing dashboards and internal tools.
          Worked closely with designers and backend engineers to deliver
          seamless user experiences.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
          Developed responsive web applications using React, TypeScript, and
          modern CSS frameworks. Implemented real-time data visualization
          features and optimized application performance, reducing load times by
          35%.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
          Full Stack Developer - Digital Agency
        </h4>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Developed full-stack web applications using React, Node.js, and
          PostgreSQL. Collaborated with clients to understand requirements and
          deliver custom solutions.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
          Built RESTful APIs and integrated third-party services including
          payment gateways and authentication systems. Implemented automated
          testing and CI/CD pipelines, improving deployment efficiency and code
          quality.
        </p>
      </div>
    ),
  },
];
