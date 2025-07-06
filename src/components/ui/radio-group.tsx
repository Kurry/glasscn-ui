'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  root: 'grid gap-2',
  item: [
    'aspect-square h-4 w-4 rounded-full border border-gray-200 dark:border-gray-900', // + dark:border-gray-800 dark:border-gray-50 ?
    'text-neutral-900 ring-offset-white focus:outline-none focus-visible:ring-2',
    'focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'dark:text-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-gray-300',
  ],
  indicator: 'flex items-center justify-center',
  icon: 'h-2.5 w-2.5 fill-current text-current',
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn(twStyles.root, className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn(twStyles.item, className)} {...props}>
      <RadioGroupPrimitive.Indicator className={twStyles.indicator}>
        <Circle className={twStyles.icon} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
