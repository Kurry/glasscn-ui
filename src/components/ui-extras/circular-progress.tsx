"use client";

import { cn } from "@/lib/utils";
import React from "react";

type RootProps = React.ComponentPropsWithoutRef<"div"> & {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

const Root = React.forwardRef<React.ElementRef<"div">, RootProps>(
  ({ size = "md", children, className, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-16 h-16 text-sm",
      md: "w-20 h-20 text-base",
      lg: "w-24 h-24 text-xl",
    };

    return (
      <div
        ref={ref}
        className={cn("relative", sizeClasses[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const Label = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { value: number; suffix?: string }
>(({ className, children, value, suffix, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <span className="font-semibold">
        {value.toFixed(1)}
        {suffix ?? "%"}
      </span>
    </div>
  );
});

const Vector = React.forwardRef<
  React.ElementRef<"svg">,
  React.ComponentPropsWithoutRef<"svg"> & { value: number }
>(({ className, children, value, ...props }, ref) => {
  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg
      ref={ref}
      className={cn("w-full h-full -rotate-90", className)}
      viewBox="0 0 100 100"
      {...props}
    >
      <title>Circular Progress {value}</title>
      <circle
        className="text-gray-200 stroke-gray-500/30"
        strokeWidth="10"
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
      />
      <circle
        className="text-accent-600 progress-ring__circle stroke-current animate-circular-stroke"
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        style={
          {
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset,
            "--circular-progress-dash-offset": strokeDashoffset,
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          } as any
        }
      />
    </svg>
  );
});

export const CircularProgress = {
  Root,
  Label,
  Vector,
};
