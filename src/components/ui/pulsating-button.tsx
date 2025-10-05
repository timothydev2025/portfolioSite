import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    { className, children, pulseColor = "#a2d2ff", duration = "2s", ...props },
    ref
  ) => {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
             @keyframes pulse-border {
               0% {
                 box-shadow: 0 0 0 0 ${pulseColor}80;
               }
               70% {
                 box-shadow: 0 0 0 6px ${pulseColor}40;
               }
               100% {
                 box-shadow: 0 0 0 0 ${pulseColor}00;
               }
             }
          `,
          }}
        />
        <button
          ref={ref}
          className={cn(
            "bg-primary text-primary-foreground relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center transition-all duration-300 hover:scale-105",
            className
          )}
          style={{
            animation: `pulse-border ${duration} ease-in-out infinite`,
          }}
          {...props}
        >
          {children}
        </button>
      </>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
