'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import { X } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  overlay: [
    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0',
  ],
  close: [
    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity',
    'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950',
    'focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100',
    'dark:ring-offset-neutral-950 dark:focus:ring-gray-300',
    'dark:data-[state=open]:bg-gray-800',
  ],
  closeIcon: 'h-4 w-4',
  header: 'flex flex-col space-y-2 text-center sm:text-left',
  footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  title: 'text-lg font-semibold text-neutral-950 dark:text-neutral-50',
  description: 'text-sm text-neutral-500 dark:text-neutral-400',
}

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return <SheetPrimitive.Overlay className={cn(twStyles.overlay, className)} {...props} ref={ref} />
})
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-gray-950',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>
>(({ side = 'right', className, children, ...props }, ref) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className={cn(twStyles.close)}>
          <X className={twStyles.closeIcon} />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(twStyles.header, className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(twStyles.footer, className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => {
  return <SheetPrimitive.Title ref={ref} className={cn(twStyles.title, className)} {...props} />
})
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => {
  return <SheetPrimitive.Description ref={ref} className={cn(twStyles.description, className)} {...props} />
})
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
