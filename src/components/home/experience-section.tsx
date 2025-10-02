"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/lib/experienceData";

export default function ExperienceSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <Timeline data={experienceData} />
      </div>
    </section>
  );
}
