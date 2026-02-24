"use client";

import { useEffect, useState } from "react";
import { Clock as ClockIcon } from "lucide-react";

const PLACEHOLDER_TIME = "00:00:00";
const PLACEHOLDER_LOCATION = "";

export function Clock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string>(PLACEHOLDER_TIME);
  const [location, setLocation] = useState<string>(PLACEHOLDER_LOCATION);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Phoenix",
      };
      setTime(now.toLocaleTimeString([], options));
    };

    setLocation("USA");
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <div
      className="relative flex items-center gap-3 rounded-full border border-white/20 dark:border-zinc-700/30 
                    bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl 
                    px-4 py-2 shadow-lg shadow-black/5 dark:shadow-black/20
                    transition-all duration-300 ease-out
                    hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30
                    hover:bg-white/20 dark:hover:bg-zinc-900/30
                    hover:border-white/30 dark:hover:border-zinc-600/40
                    before:absolute before:inset-0 before:rounded-full 
                    before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent 
                    dark:before:from-white/10 dark:before:via-white/2 dark:before:to-transparent
                    before:pointer-events-none"
    >
      <ClockIcon className="relative z-10 h-4 w-4 text-foreground/70" />
      <div className="relative z-10 flex flex-col items-center gap-0.5">
        <span className="font-mono text-sm font-semibold leading-tight text-foreground" suppressHydrationWarning>
          {time}
        </span>
        <span className="font-mono text-xs text-muted-foreground leading-tight uppercase tracking-wide" suppressHydrationWarning>
          {location}
        </span>
      </div>
    </div>
  );
}
