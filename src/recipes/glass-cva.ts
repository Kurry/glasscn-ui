import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
// import type { cva } from "class-variance-authority";
// type CvaOptionsWithoutUndefined<T> = Exclude<Parameters<typeof cva<T>>[1], undefined>;

const glassSurfaceStyles = {
  solidBg: ["bg-white dark:bg-gray-950"],
  solidBorder: ["border border-gray-300 dark:border-gray-500/70"],
  glassBg: ["bg-white/70 dark:bg-gray-950/50"],
  glassBorder: ["border border-gray-200/60 dark:border-gray-500/70"],
  // glassInnerShadow: ["shadow-inset-white", "dark:shadow-inset-gray"], // this overrides the outset shadow.
};

export const glassCvaConfig = {
  variants: {
    variant: {
      solid: cn(
        ...glassSurfaceStyles.solidBg,
        ...glassSurfaceStyles.solidBorder,
      ),
      glass: cn(
        ...glassSurfaceStyles.glassBorder,
        ...glassSurfaceStyles.glassBg,
      ),
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

export const glassStorybookConfig = {
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(glassCvaConfig.variants.variant),
    },
    blur: {
      control: "select",
      options: Object.keys(glassCvaConfig.variants.blur),
    },
  },
  args: {
    variant: glassCvaConfig.defaultVariants.variant,
    blur: glassCvaConfig.defaultVariants.blur,
  },
} as const;

// Test the cva function for possible type errors
cva("", glassCvaConfig);
