import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  input: [
    'flex h-10 w-full rounded-lg px-3 py-2 text-sm transition-all duration-150',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Architectural Glass design
    'bg-white ring-1 ring-black/5 shadow-sm',
    'dark:bg-gray-900 dark:ring-white/10',
    // placeholder:
    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
    // focus state:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500',
    'focus-visible:shadow-md',
    // ring offset color:
    'ring-offset-white dark:ring-offset-gray-950',
    // hover state:
    'hover:ring-black/10 dark:hover:ring-white/20',
  ],
}

const Input = React.forwardRef<React.ElementRef<'input'>, React.ComponentPropsWithoutRef<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(twStyles.input, className)} ref={ref} {...props} />
  },
)
Input.displayName = 'Input'

export { Input }
