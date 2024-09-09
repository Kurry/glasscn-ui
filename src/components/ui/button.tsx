import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { SpinnerIcon } from "../icons/spinner-icon";

const twStyles = {
  base: [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ",
    "transition-colors focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "ring-offset-white focus-visible:ring-gray-950",
    "dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  ],
  variant: {
    default: [
      "bg-gray-900 text-gray-50 hover:bg-gray-900/90",
      "dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
    ],
    subtle: [
      "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
      "dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
    ],
    outline: [
      "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 hover:text-gray-900",
      "dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800",
      "dark:text-gray-50 dark:hover:text-gray-50 bg-opacity-30 dark:bg-opacity-30",
    ],
    ghost: [
      "hover:bg-gray-100 hover:text-gray-900",
      "dark:hover:bg-gray-800 dark:hover:text-gray-50",
    ],
    link: [
      "text-gray-900 underline decoration-gray-700 decoration-dotted underline-offset-4 hover:decoration-solid",
      "dark:text-gray-50 dark:decoration-gray-100",
    ],
  },
  colors: {
    primary: [
      "ring-offset-white focus-visible:ring-primary-900",
      "dark:ring-offset-primary-900 dark:focus-visible:ring-primary-300",
    ],
    secondary: [
      "ring-offset-white focus-visible:ring-secondary-900",
      "dark:ring-offset-secondary-900 dark:focus-visible:ring-secondary-300",
    ],
    danger: [
      "ring-offset-white focus-visible:ring-danger-900",
      "dark:ring-offset-danger-900 dark:focus-visible:ring-danger-300",
    ],
    warning: [
      "ring-offset-white focus-visible:ring-warn-900",
      "dark:ring-offset-warn-900 dark:focus-visible:ring-warn-300",
    ],
  },
  colorVariants: {
    primary: {
      default: [
        "bg-primary-600 text-white hover:bg-primary-600/90",
        "dark:bg-primary-600 dark:text-white dark:hover:bg-primary-600/90",
      ],
      subtle: [
        "bg-primary-100 text-primary-900 hover:bg-primary-100/80",
        "dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80",
      ],
      outline: [
        "border border-primary-300 bg-white hover:bg-primary-100 text-primary-900 hover:text-primary-900",
        "dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800",
        "dark:text-primary-50 dark:hover:text-primary-50",
      ],
      ghost: [
        "hover:bg-primary-100 hover:text-primary-900",
        "dark:hover:bg-primary-800 dark:hover:text-primary-50",
      ],
      link: [
        "text-primary-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid",
        "dark:text-primary-500 dark:decoration-current",
      ],
    },
    secondary: {
      default: [
        "bg-secondary-600 text-white hover:bg-secondary-600/90",
        "dark:bg-secondary-600 dark:text-white dark:hover:bg-secondary-600/90",
      ],
      subtle: [
        "bg-secondary-100 text-secondary-900 hover:bg-secondary-100/80",
        "dark:bg-secondary-800 dark:text-secondary-50 dark:hover:bg-secondary-800/80",
      ],
      outline: [
        "border border-secondary-300 bg-white hover:bg-secondary-100 text-secondary-900 hover:text-secondary-900",
        "dark:border-secondary-800 dark:bg-secondary-950 dark:hover:bg-secondary-800",
        "dark:text-secondary-50 dark:hover:text-secondary-50",
      ],
      ghost: [
        "hover:bg-secondary-100 hover:text-secondary-900",
        "dark:hover:bg-secondary-800 dark:hover:text-secondary-50",
      ],
      link: [
        "text-secondary-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid",
        "dark:text-secondary-500 dark:decoration-current",
      ],
    },
    danger: {
      default: [
        "bg-danger-600 text-white hover:bg-danger-600/90",
        "dark:bg-danger-600 dark:text-white dark:hover:bg-danger-600/90",
      ],
      subtle: [
        "bg-danger-100 text-danger-900 hover:bg-danger-100/80",
        "dark:bg-danger-800 dark:text-danger-50 dark:hover:bg-danger-800/80",
      ],
      outline: [
        "border border-danger-300 bg-white hover:bg-danger-100 text-danger-900 hover:text-danger-900",
        "dark:border-danger-800 dark:bg-danger-950 dark:hover:bg-danger-800",
        "dark:text-danger-50 dark:hover:text-danger-50",
      ],
      ghost: [
        "hover:bg-danger-100 hover:text-danger-900",
        "dark:hover:bg-danger-800 dark:hover:text-danger-50",
      ],
      link: [
        "text-danger-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid",
        "dark:text-danger-500 dark:decoration-current",
      ],
    },
    warning: {
      default: [
        "bg-warn-500 text-black hover:bg-warn-500/90",
        "dark:bg-warn-500 dark:text-black dark:hover:bg-warn-500/90",
      ],
      subtle: [
        "bg-warn-100 text-warn-900 hover:bg-warn-100/80",
        "dark:bg-warn-700 dark:text-warn-50 dark:hover:bg-warn-700/80",
      ],
      outline: [
        "border border-warn-300 bg-white hover:bg-warn-100 text-warn-900 hover:text-warn-900",
        "dark:border-warn-800 dark:bg-warn-950 dark:hover:bg-warn-800",
        "dark:text-warn-50 dark:hover:text-warn-50",
      ],
      ghost: [
        "hover:bg-warn-100 hover:text-warn-900",
        "dark:hover:bg-warn-700 dark:hover:text-warn-50",
      ],
      link: [
        "text-warn-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid",
        "dark:text-warn-500 dark:decoration-current",
      ],
    },
  },
};

const buttonVariants = cva(cn(twStyles.base), {
  variants: {
    variant: {
      default: cn(twStyles.variant.default),
      subtle: cn(twStyles.variant.subtle),
      outline: cn(twStyles.variant.outline),
      ghost: cn(twStyles.variant.ghost),
      link: cn(twStyles.variant.link),
    },
    color: {
      default: "",
      primary: cn(twStyles.colors.primary),
      secondary: cn(twStyles.colors.secondary),
      danger: cn(twStyles.colors.danger),
      warning: cn(twStyles.colors.warning),
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
    size: {
      sm: "h-8 px-3",
      default: "h-10 px-4 py-2",
      lg: "h-12 px-5 text-md",
      xl: "h-14 px-7 text-md",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
    radius: "default",
  },
  compoundVariants: [
    // primary color variants
    {
      variant: "default",
      color: "primary",
      className: cn(twStyles.colorVariants.primary.default),
    },
    {
      variant: "subtle",
      color: "primary",
      className: cn(twStyles.colorVariants.primary.subtle),
    },
    {
      variant: "outline",
      color: "primary",
      className: cn(twStyles.colorVariants.primary.outline),
    },
    {
      variant: "ghost",
      color: "primary",
      className: cn(twStyles.colorVariants.primary.ghost),
    },
    {
      variant: "link",
      color: "primary",
      className: cn(twStyles.colorVariants.primary.link),
    },
    // secondary color variants
    {
      variant: "default",
      color: "secondary",
      className: cn(twStyles.colorVariants.secondary.default),
    },
    {
      variant: "subtle",
      color: "secondary",
      className: cn(twStyles.colorVariants.secondary.subtle),
    },
    {
      variant: "outline",
      color: "secondary",
      className: cn(twStyles.colorVariants.secondary.outline),
    },
    {
      variant: "ghost",
      color: "secondary",
      className: cn(twStyles.colorVariants.secondary.ghost),
    },
    {
      variant: "link",
      color: "secondary",
      className: cn(twStyles.colorVariants.secondary.link),
    },
    // danger color variants
    {
      variant: "default",
      color: "danger",
      className: cn(twStyles.colorVariants.danger.default),
    },
    {
      variant: "subtle",
      color: "danger",
      className: cn(twStyles.colorVariants.danger.subtle),
    },
    {
      variant: "outline",
      color: "danger",
      className: cn(twStyles.colorVariants.danger.outline),
    },
    {
      variant: "ghost",
      color: "danger",
      className: cn(twStyles.colorVariants.danger.ghost),
    },
    {
      variant: "link",
      color: "danger",
      className: cn(twStyles.colorVariants.danger.link),
    },
    // warning color variants
    {
      variant: "default",
      color: "warning",
      className: cn(twStyles.colorVariants.warning.default),
    },
    {
      variant: "subtle",
      color: "warning",
      className: cn(twStyles.colorVariants.warning.subtle),
    },
    {
      variant: "outline",
      color: "warning",
      className: cn(twStyles.colorVariants.warning.outline),
    },
    {
      variant: "ghost",
      color: "warning",
      className: cn(twStyles.colorVariants.warning.ghost),
    },
    {
      variant: "link",
      color: "warning",
      className: cn(twStyles.colorVariants.warning.link),
    },
  ],
});

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      radius,
      color,
      asChild = false,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, radius, color, className }),
          {
            "cursor-not-allowed": props.disabled,
          },
        )}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="flex items-center">
            <SpinnerIcon className="mr-2" />
            {children}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

function ButtonContent({
  className,
  children,
  ...rest
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-ellipsis whitespace-nowrap overflow-hidden inline-block px-1.5",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export { Button, ButtonContent, buttonVariants };
