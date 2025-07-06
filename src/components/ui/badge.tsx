import { type VariantProps, cva } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-blue-500',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white ring-1 ring-black/10 dark:bg-white dark:text-gray-900 dark:ring-white/20',
        secondary: 'bg-gray-100 text-gray-900 ring-1 ring-black/5 dark:bg-gray-800 dark:text-white dark:ring-white/10',
        destructive: 'bg-red-500 text-white ring-1 ring-red-600/20 dark:bg-red-600 dark:ring-red-500/20',
        outline: 'bg-white text-gray-900 ring-1 ring-black/10 dark:bg-gray-900 dark:text-white dark:ring-white/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
