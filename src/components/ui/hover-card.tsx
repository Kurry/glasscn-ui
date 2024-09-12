"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";

import { cn } from "@/lib/utils";
import { glassCvaConfig } from "@/recipes/glass-cva";
import { type VariantProps, cva } from "class-variance-authority";

const twStyles = {
  content: [
    "z-50 w-64 rounded-md p-4",
    "shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
    // colors:
    "border",
    // "border-gray-200 dark:border-gray-800",
    // "bg-white dark:bg-gray-950",
    "text-foreground",
  ],
};

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const hoverCardContentVariants = cva(cn(twStyles.content), glassCvaConfig);

type HoverCardContentProps = VariantProps<typeof hoverCardContentVariants> &
  React.ComponentPropsWithRef<typeof HoverCardPrimitive.Content>;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(
  (
    { className, align = "center", sideOffset = 4, variant, blur, ...props },
    ref,
  ) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(hoverCardContentVariants({ variant, blur }), className)}
      {...props}
    />
  ),
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
