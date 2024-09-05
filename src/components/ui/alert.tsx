import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  base: [
    "relative w-full rounded-lg border border-gray-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950",
    "dark:border-gray-800 dark:[&>svg]:text-neutral-50",
  ],
  defaultVariant: [
    "bg-white text-neutral-950 dark:bg-gray-950 dark:text-neutral-50",
  ],
  destructiveVariant: [
    "border-danger-500/50 text-danger-500 dark:border-danger-500 [&>svg]:text-danger-500",
    "dark:border-danger-900/50 dark:text-danger-900 dark:dark:border-danger-900",
    "dark:[&>svg]:text-danger-900",
    "bg-danger-950/20",
  ],
  title: ["mb-1 font-medium leading-none tracking-tight"],
  description: ["text-sm [&_p]:leading-relaxed"],
};

const alertVariants = cva(cn(twStyles.base), {
  variants: {
    variant: {
      default: cn(twStyles.defaultVariant),
      destructive: cn(twStyles.destructiveVariant),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = ({
  ref,
  className,
  variant,
  ...props
}: React.ComponentPropsWithRef<"div"> & VariantProps<typeof alertVariants>) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);
Alert.displayName = "Alert";

const AlertTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"h5">) => (
  <h5 ref={ref} className={cn(twStyles.title, className)} {...props} />
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn(twStyles.description, className)} {...props} />
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
