"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { blurVariant, glassContainerClasses, recipeStyles } from "../recipes";

const twStyles = {
  overlay: [
    "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    "data-[state=open]:fade-in-0",
  ],
  content: [
    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%]",
    "translate-y-[-50%] gap-4 p-6 shadow-lg border",
    "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[state=closed]:slide-out-to-left-1/2",
    "data-[state=closed]:slide-out-to-top-[48%]",
    "data-[state=open]:slide-in-from-left-1/2",
    "data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
    "border-gray-200 bg-white",
    "dark:border-gray-800 dark:bg-gray-950",
  ],
  contentGlass: glassContainerClasses,
  header: ["flex flex-col space-y-2 text-center sm:text-left"],
  footer: ["flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"],
  title: ["text-lg font-semibold leading-none tracking-tight"],
  description: ["text-sm text-neutral-600/90 dark:text-neutral-400"],
};

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>) => (
  <AlertDialogPrimitive.Overlay
    className={cn(twStyles.overlay, className)}
    {...props}
    ref={ref}
  />
);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const alertDialogContentVariants = cva(cn(twStyles.content), {
  variants: {
    variant: {
      default: "",
      glass: cn(twStyles.contentGlass),
    },
    blur: blurVariant,
  },
  defaultVariants: {
    variant: "default",
    blur: "default",
  },
});

export interface AlertDialogProps
  extends React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof alertDialogContentVariants> {
  innerGlow?: boolean;
}

const AlertDialogContent = ({
  ref,
  className,
  blur,
  variant,
  innerGlow,
  ...props
}: AlertDialogProps) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        alertDialogContentVariants({ blur, variant }),
        {
          [recipeStyles.glassInnerShadow.join(" ")]: innerGlow,
        },
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(twStyles.header, className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(twStyles.footer, className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(twStyles.title, className)}
    {...props}
  />
);
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(twStyles.description, className)}
    {...props}
  />
);
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className,
    )}
    {...props}
  />
);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
