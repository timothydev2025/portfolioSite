import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  features?: string[];
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  features,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background border border-gray-200 [box-shadow:0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-neutral-900/40 dark:border-neutral-800 transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4 flex flex-col h-full gap-3">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-2">
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 dark:text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p
          className={cn(
            "max-w-lg text-neutral-400",
            cta.includes("%") ? "line-clamp-2" : ""
          )}
        >
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <div className="pointer-events-none flex flex-col gap-2 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:max-h-0 lg:group-hover:max-h-32 overflow-hidden">
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 dark:text-blue-400 mt-0.5">
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cta.includes("%") && (
        <div
          className={cn(
            "pointer-events-none flex w-full transform-gpu flex-row items-center transition-all duration-300 lg:hidden mt-auto pt-2"
          )}
        >
          <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            {cta}
          </div>
        </div>
      )}
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      {cta.includes("%") ? (
        <div className="text-5xl font-bold text-neutral-800 dark:text-neutral-200">
          {cta}
        </div>
      ) : (
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
