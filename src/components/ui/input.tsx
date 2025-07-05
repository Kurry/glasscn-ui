import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  input: [
    'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'disabled:cursor-not-allowed',
    // ----- colors -----
    'disabled:opacity-50',
    // border:
    'border-border',
    // bg:
    'bg-white dark:bg-gray-950',
    // placeholder:
    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
    // ring size:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // ring color:
    'focus-visible:ring-ring/90',
    // ring offset color:
    'ring-offset-white dark:ring-offset-gray-950',
  ],
}

const Input = React.forwardRef<React.ElementRef<'input'>, React.ComponentPropsWithoutRef<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(twStyles.input, className)} ref={ref} {...props} />
  },
)
Input.displayName = 'Input'

export { Input }
