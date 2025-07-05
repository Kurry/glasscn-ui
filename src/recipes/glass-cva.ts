import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const glassSurfaceStyles = {
  solidBg: ['bg-background'],
  solidBorder: ['border border-border'],
  glassBg: [
    'bg-background/80 dark:bg-background/50',
    'backdrop-saturate-150',
    'supports-[backdrop-filter]:bg-background/60',
  ],
  glassBorder: ['border border-border/70 dark:border-border/50'],
  glassEffects: [
    'backdrop-blur-md',
    'backdrop-saturate-150',
    'before:absolute before:inset-0 before:rounded-[inherit]',
    'before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-50',
    'before:pointer-events-none',
    'shadow-elevation-2 dark:shadow-elevation-3',
    'transition-all duration-200 ease-smooth',
  ],
  glassHover: [
    'hover:shadow-elevation-3 dark:hover:shadow-elevation-4',
    'hover:backdrop-blur-lg',
    'hover:before:opacity-60',
    'hover:bg-background/90 dark:hover:bg-background/60',
  ],
}

export const glassCvaConfig = {
  variants: {
    variant: {
      solid: cn(...glassSurfaceStyles.solidBg, ...glassSurfaceStyles.solidBorder),
      glass: cn(
        ...glassSurfaceStyles.glassBorder,
        ...glassSurfaceStyles.glassBg,
        ...glassSurfaceStyles.glassEffects,
      ),
    },
    blur: {
      none: 'backdrop-blur-none',
      xs: 'backdrop-blur-xs',
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
      '2xl': 'backdrop-blur-2xl',
      '3xl': 'backdrop-blur-3xl',
    },
    interactive: {
      true: cn(...glassSurfaceStyles.glassHover),
      false: '',
    },
  },
  defaultVariants: {
    variant: 'glass',
    blur: 'md',
    interactive: false,
  },
} as const

export const glassStorybookConfig = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(glassCvaConfig.variants.variant),
    },
    blur: {
      control: 'select',
      options: Object.keys(glassCvaConfig.variants.blur),
    },
    interactive: {
      control: 'boolean',
    },
  },
  args: {
    variant: glassCvaConfig.defaultVariants.variant,
    blur: glassCvaConfig.defaultVariants.blur,
    interactive: glassCvaConfig.defaultVariants.interactive,
  },
} as const

// Test the cva function for possible type errors
cva('', glassCvaConfig)