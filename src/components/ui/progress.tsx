"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  root: [
    "relative h-4 w-full overflow-hidden rounded-full bg-gray-100",
    "dark:bg-gray-800",
  ],
  indicator: [
    "h-full w-full flex-1 bg-gray-900 transition-all",
    "dark:bg-gray-50",
  ],
};

const Progress = ({
  ref,
  className,
  value,
  ...props
}: React.ComponentPropsWithRef<typeof ProgressPrimitive.Root>) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(twStyles.root, className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(twStyles.indicator)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
