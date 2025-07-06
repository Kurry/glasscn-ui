'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  root: [
    'relative h-2 w-full overflow-hidden rounded-full',
    'bg-gray-200 dark:bg-gray-700',
    'ring-1 ring-black/5 dark:ring-white/10',
  ],
  indicator: [
    'h-full w-full flex-1 transition-all duration-300',
    'bg-gradient-to-r from-blue-500 to-blue-600',
    'dark:from-blue-600 dark:to-blue-700',
  ],
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root ref={ref} className={cn(twStyles.root, className)} {...props}>
      <ProgressPrimitive.Indicator
        className={cn(twStyles.indicator)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
