'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  root: [
    'peer h-4 w-4 shrink-0 rounded-sm border border-gray-900',
    'ring-offset-white focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-neutral-50',
    'dark:border-gray-50 dark:ring-offset-neutral-950',
    'dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-50',
    'dark:data-[state=checked]:text-neutral-900',
  ],
  indicator: 'flex items-center justify-center text-current',
  icon: 'h-4 w-4',
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn(twStyles.root, className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn(twStyles.indicator)}>
      <Check className={cn(twStyles.icon)} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
