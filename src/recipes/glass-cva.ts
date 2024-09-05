import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
// import type { cva } from "class-variance-authority";
// type CvaOptionsWithoutUndefined<T> = Exclude<Parameters<typeof cva<T>>[1], undefined>;

const glassSurfaceStyles = {
  glassBorder: ["border-gray-200/60 dark:border-gray-600/60"],
  glassBg: ["bg-white/60 dark:bg-gray-950/50"],
  // glassInnerShadow: ["shadow-inset-white", "dark:shadow-inset-gray"], // this overrides the outset shadow.
};

export const glassCvaConfig = {
  variants: {
    variant: {
      glass: cn([
        ...glassSurfaceStyles.glassBorder,
        ...glassSurfaceStyles.glassBg,
      ]),
      standard: "",
    },
    blur: {
      none: "",
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
      "2xl": "backdrop-blur-2xl",
      "3xl": "backdrop-blur-3xl",
    },
    // innerGlow: {
    //   true: cn(glassSurfaceStyles.glassInnerShadow),
    //   false: "",
    // },
  },
  defaultVariants: {
    variant: "glass",
    blur: "md",
    // innerGlow: false,
  },
} as const;

// Test the cva function for possible type errors
cva("", glassCvaConfig);
