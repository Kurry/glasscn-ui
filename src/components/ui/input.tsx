import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  input: [
    "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm",
    "ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
    "disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950",
    "dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400",
    "dark:focus-visible:ring-gray-300",
  ],
};

export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

const Input = ({ ref, className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(twStyles.input, className)}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
