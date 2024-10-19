'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  root: 'relative overflow-hidden',
  viewport: 'h-full w-full rounded-[inherit]',
  scrollbar: [
    'flex touch-none select-none transition-colors',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5',
    'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col',
  ],
  scrollbarThumb: ['relative flex-1 rounded-full bg-gray-200 dark:bg-gray-800'],
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Root ref={ref} className={cn(twStyles.root, className)} {...props}>
      <ScrollAreaPrimitive.Viewport className={twStyles.viewport}>{children}</ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(twStyles.scrollbar, className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={cn(twStyles.scrollbarThumb)} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
