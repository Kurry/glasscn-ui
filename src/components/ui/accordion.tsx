'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  item: ['border-b border-b-gray-600/30 dark:border-b-gray-500/40'],
  trigger: [
    'flex flex-1 items-center justify-between py-4 font-medium transition-all',
    'hover:underline [&[data-state=open]>svg]:rotate-180',
  ],
  triggerHeader: ['flex'],
  chevron: ['h-4 w-4 shrink-0 transition-transform duration-100'],
  content: [
    'overflow-hidden text-sm transition-all',
    'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  ],
  contentInner: ['pb-4 pt-0'],
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(twStyles.item, className)} {...props} />
))
AccordionItem.displayName = AccordionPrimitive.Item.displayName

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={cn(twStyles.triggerHeader)}>
    <AccordionPrimitive.Trigger ref={ref} className={cn(twStyles.trigger, className)} {...props}>
      {children}
      <CaretDown className={cn(twStyles.chevron)} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={cn(twStyles.content)} {...props}>
    <div className={cn(twStyles.contentInner, className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
