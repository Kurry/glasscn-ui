import * as React from 'react'

import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

const twStyles = {
  card: ['rounded-lg transition-all duration-300'],
  solidCard: ['bg-white ring-1 ring-black/5 shadow-sm', 'dark:bg-gray-900 dark:ring-white/10'],
  glassCard: ['bg-white/75 backdrop-blur-lg ring-1 ring-black/5 shadow-lg', 'dark:bg-gray-900/75 dark:ring-white/10'],
  colors: {
    primary: 'ring-blue-200 dark:ring-blue-800',
    secondary: 'ring-secondary-200 dark:ring-secondary-800',
    accent: 'ring-accent-200 dark:ring-accent-800',
    warning: 'ring-amber-200 dark:ring-amber-800',
    danger: 'ring-red-200 dark:ring-red-800',
  },
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white',
  description: 'text-sm text-gray-600 dark:text-gray-400',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
}

const cardVariants = cva(cn(twStyles.card), {
  variants: {
    variant: {
      solid: cn(twStyles.solidCard),
      glass: cn(twStyles.glassCard),
    },
    blur: {
      none: '',
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
      '2xl': 'backdrop-blur-2xl',
      '3xl': 'backdrop-blur-3xl',
    },
    color: {
      default: '',
      primary: cn(twStyles.colors.primary),
      secondary: cn(twStyles.colors.secondary),
      accent: cn(twStyles.colors.accent),
      warning: cn(twStyles.colors.warning),
      danger: cn(twStyles.colors.danger),
    },
  },
  defaultVariants: {
    variant: 'solid',
    blur: 'lg',
    color: 'default',
  },
})
interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, blur, color, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant, blur, color }), className)} {...props} />
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
