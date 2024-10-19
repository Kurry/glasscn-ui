import * as React from 'react'

import { cn } from '@/lib/utils'
import { glassCvaConfig } from '@/recipes/glass-cva'
import { type VariantProps, cva } from 'class-variance-authority'

const twStyles = {
  card: ['rounded-lg shadow-sm'],
  colors: {
    primary: 'text-foreground-dark bg-primary dark:bg-primary border-primary dark:border-primary',
    secondary: 'text-foreground-dark bg-secondary dark:bg-secondary border-secondary dark:border-secondary',
    accent: 'text-foreground-dark bg-accent dark:bg-accent border-accent dark:border-accent',
    warning: 'text-foreground-dark bg-warning dark:bg-warning border-warning dark:border-warning',
    danger: 'text-foreground-dark bg-danger dark:bg-danger border-danger dark:border-danger',
    // success: "bg-success",
    // info: "bg-info",
  },
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-2xl font-semibold leading-none tracking-tight',
  description: 'text-sm text-neutral-500 dark:text-neutral-400',
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
  },
  defaultVariants: {
    ...glassCvaConfig.defaultVariants,
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
