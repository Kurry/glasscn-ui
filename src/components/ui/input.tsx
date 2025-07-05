import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  input: [
    'flex h-10 w-full rounded-md border px-3 py-2 text-sm font-medium',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'disabled:cursor-not-allowed',
    'transition-all duration-200 ease-smooth',
    'transform-gpu backface-visibility-hidden',
    // Enhanced colors with better contrast
    'disabled:opacity-50',
    'border-border',
    'bg-background/60 backdrop-blur-sm',
    'supports-[backdrop-filter]:bg-background/40',
    'placeholder:text-foreground-muted',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'focus-visible:ring-ring focus-visible:border-ring',
    'ring-offset-background',
    'hover:border-border-focus/50',
    'focus:border-ring focus:bg-background/80',
    'shadow-elevation-1 focus:shadow-elevation-2',
  ],
}

const Input = React.forwardRef<React.ElementRef<'input'>, React.ComponentPropsWithoutRef<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(twStyles.input, className)} ref={ref} {...props} />
  },
)
Input.displayName = 'Input'

export { Input }
