import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  textarea: [
    'flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm',
    'ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800',
    'dark:bg-gray-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400',
    'dark:focus-visible:ring-gray-300',
  ],
}

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {}

const Textarea = React.forwardRef<React.ElementRef<'textarea'>, TextareaProps>(({ className, ...props }, ref) => {
  return <textarea className={cn(twStyles.textarea, className)} ref={ref} {...props} />
})
Textarea.displayName = 'Textarea'

export { Textarea }
