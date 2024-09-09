"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import * as React from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { glassCvaConfig } from "@/recipes/glass-cva";
import { type VariantProps, cva } from "class-variance-authority";

const twStyles = {
  command: [
    "flex h-full w-full flex-col overflow-hidden rounded-md bg-white",
    "text-neutral-950 dark:bg-gray-950 dark:text-neutral-50",
  ],
  dialogContent: "overflow-hidden p-0 shadow-lg",
  commandInner: [
    "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium",
    "[&_[cmdk-group-heading]]:text-neutral-500",
    "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2",
    "[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5",
    "[&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3",
    "[&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
    "dark:[&_[cmdk-group-heading]]:text-neutral-400",
  ],
  // separator: "-mx-1 h-px bg-gray-200 dark:bg-gray-800",
  separator: "mx-1 my-1 h-px bg-gray-500/30",
  inputWrapper: "flex items-center border-b px-3 border-gray-500/30",
  input: [
    "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none",
    "placeholder:text-neutral-500 disabled:cursor-not-allowed",
    "disabled:opacity-50 dark:placeholder:text-neutral-400",
  ],
  list: "max-h-[300px] overflow-y-auto overflow-x-hidden",
  empty: "py-6 text-center text-sm",
  group: [
    "overflow-hidden p-1 text-neutral-950 [&_[cmdk-group-heading]]:px-2",
    "[&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs",
    "[&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500",
    "dark:text-neutral-50 dark:[&_[cmdk-group-heading]]:text-neutral-400",
  ],
  item: [
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
    "outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
    "aria-selected:bg-accent-600 aria-selected:text-accent-50",
  ],
  shortcut: [
    "ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400",
  ],
  searchIcon: "mr-2 h-4 w-4 shrink-0 opacity-50",
};

const commandVariants = cva(cn(twStyles.command), glassCvaConfig);
interface CommandProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive>,
    VariantProps<typeof commandVariants> {}

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, variant, blur, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(commandVariants({ variant, blur }), className)}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className={twStyles.dialogContent}>
        <Command className={cn(twStyles.commandInner)}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className={twStyles.inputWrapper} cmdk-input-wrapper="">
    <Search className={cn(twStyles.searchIcon)} />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(twStyles.input, className)}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(twStyles.list, className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className={twStyles.empty} {...props} />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(twStyles.group, className)}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(twStyles.separator, className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(twStyles.item, className)}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(twStyles.shortcut, className)} {...props} />;
};
CommandShortcut.displayname = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
