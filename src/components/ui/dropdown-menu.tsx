"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { glassCvaConfig } from "@/recipes/glass-cva";
import { type VariantProps, cva } from "class-variance-authority";

const twStyles = {
  content: [
    "z-50 min-w-[8rem] overflow-hidden rounded-md border",
    "p-1 shadow-lg data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
    // colors:
    "border-gray-200 dark:border-gray-800",
    "bg-white text-neutral-950",
    "dark:bg-gray-950 dark:text-neutral-50",
  ],
  item: [
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
    "outline-none transition-colors",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // colors:
    // "focus:bg-gray-100 focus:text-neutral-900",
    "focus:bg-primary-600 focus:text-primary-50",
  ],
  checkboxItem: [
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
    "outline-none transition-color",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // colors:
    // "focus:bg-gray-100 focus:text-neutral-900",
    "focus:bg-primary-600 focus:text-primary-50",
  ],
  radioItem: [
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
    "outline-none transition-colors",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // colors:
    // "focus:bg-gray-100 focus:text-neutral-900",
    "focus:bg-primary-600 focus:text-primary-50",
  ],
  label: "px-2 py-1.5 text-sm font-semibold",
  separator: "mx-1 my-1 h-px bg-gray-500/30",
  shortcut: "ml-auto text-xs tracking-widest opacity-60",
  subTrigger: [
    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
    // colors:
    // "focus:bg-gray-100 data-[state=open]:bg-gray-100",
    // "dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800",
    "focus:text-primary-50",
    "focus:focus:bg-primary-600 data-[state=open]:focus:bg-primary-600",
  ],
  subContent: [
    "z-50 min-w-[8rem] overflow-hidden rounded-md border",
    "p-1 shadow-lg data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
    // colors:
    "border-gray-200 dark:border-gray-800",
    "bg-white text-neutral-950",
    "dark:bg-gray-950 dark:text-neutral-50",
  ],
  chevronRight: "ml-auto h-4 w-4",
  itemIndicatorWrapper:
    "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
  checkIcon: "h-4 w-4",
  circleIcon: "h-2 w-2 fill-current",
};

const dropdownMenuContentVariants = cva(cn(twStyles.content), glassCvaConfig);
const dropdownMenuSubContentVariants = cva(
  cn(twStyles.subContent),
  glassCvaConfig,
);

type DropdownMenuContentProps = VariantProps<
  typeof dropdownMenuContentVariants
> &
  React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>;

type DropdownMenuSubContentProps = VariantProps<
  typeof dropdownMenuSubContentVariants
> &
  React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubContent>;

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = ({
  ref,
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(twStyles.subTrigger, inset && "pl-8", className)}
    {...props}
  >
    {children}
    <ChevronRight className={twStyles.chevronRight} />
  </DropdownMenuPrimitive.SubTrigger>
);
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = ({
  ref,
  className,
  variant,
  blur,
  ...props
}: DropdownMenuSubContentProps) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(dropdownMenuSubContentVariants({ variant, blur }), className)}
    {...props}
  />
);
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = ({
  ref,
  className,
  sideOffset = 4,
  variant,
  blur,
  ...props
}: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownMenuContentVariants({ variant, blur }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = ({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(twStyles.item, inset && "pl-8", className)}
    {...props}
  />
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = ({
  ref,
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.CheckboxItem>) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(twStyles.checkboxItem, className)}
    checked={checked}
    {...props}
  >
    <span className={twStyles.itemIndicatorWrapper}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={twStyles.checkIcon} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.RadioItem>) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(twStyles.radioItem, className)}
    {...props}
  >
    <span className={twStyles.itemIndicatorWrapper}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={twStyles.circleIcon} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = ({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(twStyles.label, inset && "pl-8", className)}
    {...props}
  />
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(twStyles.separator, className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(twStyles.shortcut, className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
