"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  item: ["border-b border-b-gray-600/30 dark:border-b-gray-500/40"],
  trigger: [
    "flex flex-1 items-center justify-between py-4 font-medium transition-all",
    "hover:underline [&[data-state=open]>svg]:rotate-180",
  ],
  chevron: ["h-4 w-4 shrink-0 transition-transform duration-100"],
  content: [
    "overflow-hidden text-sm transition-all",
    "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  ],
  contentInner: ["pb-4 pt-0"],
};

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(twStyles.item, className)}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(twStyles.trigger, className)}
      {...props}
    >
      {children}
      <ChevronDown className={cn(twStyles.chevron)} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(twStyles.content)}
    {...props}
  >
    <div className={cn(twStyles.contentInner, className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
