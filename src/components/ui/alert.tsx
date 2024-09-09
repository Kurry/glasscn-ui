import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { glassCvaConfig } from "@/recipes/glass-cva";

const twStyles = {
  base: [
    "relative w-full rounded-lg p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
    "dark:[&>svg]:text-current",
  ],
  defaultVariant: [
    // "bg-white dark:bg-gray-950 text-neutral-950 dark:text-neutral-50",
  ],
  destructiveVariant: [
    "border-danger-600 dark:border-danger-600",
    "text-danger-600 dark:text-danger-600",
    // "[&>svg]:text-current dark:[&>svg]:text-current",
  ],
  title: ["mb-1 font-medium leading-none tracking-tight"],
  description: ["text-sm [&_p]:leading-relaxed"],
};

const alertVariants = cva(cn(twStyles.base), {
  variants: {
    ...glassCvaConfig.variants,
    color: {
      default: cn(twStyles.defaultVariant),
      destructive: cn(twStyles.destructiveVariant),
    },
  },
  defaultVariants: {
    color: "default",
    ...glassCvaConfig.defaultVariants,
  },
  compoundVariants: [
    {
      color: "destructive",
      variant: "glass",
      // className: "bg-transparent dark:bg-transparent",
    },
  ],
});

const Alert = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof alertVariants>
>(({ className, variant, color, blur, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, color, blur }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h5">
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn(twStyles.title, className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(twStyles.description, className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
