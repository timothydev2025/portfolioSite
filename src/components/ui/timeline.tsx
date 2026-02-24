"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [mounted, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 text-center md:text-left">
          {/* Experience Badge with Glass Effect */}
          <div
            className="group relative mb-4 px-6 py-3 rounded-full 
                         border-2 border-zinc-300/40 dark:border-zinc-600/40 
                         bg-zinc-100/20 dark:bg-zinc-800/20 backdrop-blur-xl 
                         text-zinc-800 dark:text-zinc-200 
                         shadow-lg shadow-black/5 dark:shadow-black/20
                         hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/15
                         hover:border-purple-400/50 dark:hover:border-purple-500/40
                         transition-all duration-500 ease-out
                         flex items-center gap-3 overflow-hidden w-fit mx-auto md:mx-0
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

            <svg
              className="relative z-10 h-5 w-5 text-zinc-600 dark:text-zinc-400 
                            group-hover:text-purple-500 dark:group-hover:text-purple-400
                            transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span
              className="relative z-10 font-semibold tracking-wide uppercase
                            group-hover:text-purple-600 dark:group-hover:text-purple-400
                            transition-colors duration-300"
            >
              Experience
            </span>
          </div>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0">
            A timeline of my professional journey — highlighting the roles,
            companies, and milestones that shaped my career.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-L md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        {mounted && (
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
