import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

const twStyles = {
  base: ['font-heading tracking-tight py-1 text-balance'],
  variant: {
    default: [''],
    gradient: ['bg-clip-text text-transparent bg-gradient-to-br'],
  },
  colors: {
    default: ['text-foreground'],
    primary: ['text-primary-600'],
    secondary: ['text-secondary-600'],
  },
  colorVariants: {
    gradient: {
      default: ['text-transparent', 'from-gray-600 to-gray-900', 'dark:from-gray-50 dark:to-gray-300'],
      primary: [
        'text-transparent',
        'from-primary-500 to-primary-800',
        // "dark:from-primary-400 dark:to-primary-700",
      ],
      secondary: [
        'text-transparent',
        'from-secondary-500 to-secondary-800',
        // "dark:from-secondary-400 dark:to-secondary-700",
      ],
    },
  },
}

const componentVariants = cva(cn(twStyles.base), {
  variants: {
    variant: {
      default: cn(twStyles.variant.default),
      gradient: cn(twStyles.variant.gradient),
    },
    color: {
      default: '',
      primary: cn(twStyles.colors.primary),
      secondary: cn(twStyles.colors.secondary),
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      // "7xl": "text-7xl",
      // "8xl": "text-8xl",
      // "9xl": "text-9xl",
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'xl',
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'gradient',
      color: 'default',
      className: cn(twStyles.colorVariants.gradient.default),
    },
    {
      variant: 'gradient',
      color: 'primary',
      className: cn(twStyles.colorVariants.gradient.primary),
    },
    {
      variant: 'gradient',
      color: 'secondary',
      className: cn(twStyles.colorVariants.gradient.secondary),
    },
  ],
})

export interface HeadingTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof componentVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'
}

export function HeadingTitle({ className, children, variant, color, size, as = 'div' }: HeadingTitleProps) {
  const Tag = as
  return <Tag className={cn(componentVariants({ variant, color, size }), className)}>{children}</Tag>
}
