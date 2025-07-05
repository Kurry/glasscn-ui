import * as React from 'react'

import { cn } from '@/lib/utils'
import { glassCvaConfig } from '@/recipes/glass-cva'
import { type VariantProps, cva } from 'class-variance-authority'

const twStyles = {
  card: [
    'rounded-lg overflow-hidden',
    'transition-all duration-200 ease-smooth',
    'transform-gpu backface-visibility-hidden',
  ],
  colors: {
    primary: [
      'bg-primary-50 text-primary-900 border-primary-200',
      'dark:bg-primary-900/20 dark:text-primary-100 dark:border-primary-700',
    ],
    secondary: [
      'bg-secondary-50 text-secondary-900 border-secondary-200',
      'dark:bg-secondary-900/20 dark:text-secondary-100 dark:border-secondary-700',
    ],
    accent: [
      'bg-accent-50 text-accent-900 border-accent-200',
      'dark:bg-accent-900/20 dark:text-accent-100 dark:border-accent-700',
    ],
    warning: [
      'bg-warning-50 text-warning-900 border-warning-200',
      'dark:bg-warning-900/20 dark:text-warning-100 dark:border-warning-700',
    ],
    danger: [
      'bg-danger-50 text-danger-900 border-danger-200',
      'dark:bg-danger-900/20 dark:text-danger-100 dark:border-danger-700',
    ],
  },
  header: [
    'flex flex-col space-y-1.5 p-6',
    'border-b border-border/50',
  ],
  title: 'text-2xl font-semibold leading-none tracking-tight',
  description: 'text-sm text-foreground-muted',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
}

const cardVariants = cva(cn(twStyles.card), {
  variants: {
    ...glassCvaConfig.variants,
    color: {
      default: '',
      primary: cn(twStyles.colors.primary),
      secondary: cn(twStyles.colors.secondary),
      accent: cn(twStyles.colors.accent),
      warning: cn(twStyles.colors.warning),
      danger: cn(twStyles.colors.danger),
    },
    hover: {
      true: [
        'hover:shadow-elevation-3',
        'hover:-translate-y-0.5',
        'cursor-pointer',
      ],
      false: 'shadow-elevation-1',
    },
  },
  defaultVariants: {
    ...glassCvaConfig.defaultVariants,
    color: 'default',
    hover: false,
  },
})
interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof cardVariants> {
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, blur, color, hover, interactive, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant, blur, color, hover: hover || interactive }), className)} {...props} />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(twStyles.header, className)} {...props} />,
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn(twStyles.title, className)} {...props} />,
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn(twStyles.description, className)} {...props} />,
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(twStyles.content, className)} {...props} />,
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(twStyles.footer, className)} {...props} />,
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
