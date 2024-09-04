"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  separator: "shrink-0 bg-gray-200 dark:bg-gray-800",
  horizontal: "h-[1px] w-full",
  vertical: "h-full w-[1px]",
};

const Separator = ({
  ref,
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      twStyles.separator,
      orientation === "horizontal" ? twStyles.horizontal : twStyles.vertical,
      className,
    )}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
