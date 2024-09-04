import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  card: [
    "rounded-lg border border-gray-200 bg-white text-neutral-950 shadow-sm",
    "dark:border-gray-800 dark:bg-gray-950 dark:text-neutral-50",
  ],
  header: "flex flex-col space-y-1.5 p-6",
  title: "text-2xl font-semibold leading-none tracking-tight",
  description: "text-sm text-neutral-500 dark:text-neutral-400",
  content: "p-6 pt-0",
  footer: "flex items-center p-6 pt-0",
};

const Card = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn(twStyles.card, className)} {...props} />
);
Card.displayName = "Card";

const CardHeader = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn(twStyles.header, className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"h3">) => (
  <h3 ref={ref} className={cn(twStyles.title, className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"p">) => (
  <p ref={ref} className={cn(twStyles.description, className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn(twStyles.content, className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn(twStyles.footer, className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
