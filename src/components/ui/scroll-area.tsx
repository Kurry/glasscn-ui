"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  root: "relative overflow-hidden",
  viewport: "h-full w-full rounded-[inherit]",
  scrollbar: [
    "flex touch-none select-none transition-colors",
    "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5",
    "data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col",
  ],
  scrollbarThumb: ["relative flex-1 rounded-full bg-gray-200 dark:bg-gray-800"],
};

const ScrollArea = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(twStyles.root, className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={twStyles.viewport}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = ({
  ref,
  className,
  orientation = "vertical",
  ...props
}: React.ComponentPropsWithRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(twStyles.scrollbar, className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(twStyles.scrollbarThumb)}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
