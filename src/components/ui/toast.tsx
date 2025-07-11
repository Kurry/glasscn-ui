'use client'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { type VariantProps, cva } from 'class-variance-authority'
import { X } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const twStyles = {
  viewport: [
    'fixed top-0 z-[100] gap-2 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0',
    'sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
  ],
  toast: [
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4',
    'overflow-hidden rounded-md border border-gray-200 p-6 pr-8 shadow-lg transition-all',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
    'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out',
    'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
    'data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    'dark:border-gray-800',
  ],
  action: [
    'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-200',
    'bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors',
    'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950',
    'focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'group-[.destructive]:border-gray-100/40 group-[.destructive]:hover:border-danger-500/30',
    'group-[.destructive]:hover:bg-danger-500 group-[.destructive]:hover:text-neutral-50',
    'group-[.destructive]:focus:ring-danger-500 dark:border-gray-800 dark:ring-offset-neutral-950',
    'dark:hover:bg-gray-800 dark:focus:ring-gray-300',
    'dark:group-[.destructive]:border-gray-800/40 dark:group-[.destructive]:hover:border-danger-900/30',
    'dark:group-[.destructive]:hover:bg-danger-900 dark:group-[.destructive]:hover:text-neutral-50',
    'dark:group-[.destructive]:focus:ring-danger-900',
  ],
  close: [
    'absolute right-2 top-2 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity',
    'hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-2',
    'group-hover:opacity-100 group-[.destructive]:text-danger-300 group-[.destructive]:hover:text-danger-50',
    'group-[.destructive]:focus:ring-danger-400 group-[.destructive]:focus:ring-offset-danger-600',
    'dark:text-neutral-50/50 dark:hover:text-neutral-50',
  ],
  title: 'text-sm font-semibold',
  description: 'text-sm opacity-90',
  closeIcon: 'h-4 w-4',
}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => {
  return <ToastPrimitives.Viewport ref={ref} className={cn(twStyles.viewport, className)} {...props} />
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(twStyles.toast, {
  variants: {
    variant: {
      default: 'border bg-white text-neutral-950 dark:bg-gray-950 dark:text-neutral-50',
      destructive:
        'destructive group border-danger-500 bg-danger-500 text-neutral-50 dark:border-danger-900 dark:bg-danger-900 dark:text-neutral-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => {
  return <ToastPrimitives.Action ref={ref} className={cn(twStyles.action, className)} {...props} />
})
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Close ref={ref} className={cn(twStyles.close, className)} toast-close="" {...props}>
      <X className={twStyles.closeIcon} />
    </ToastPrimitives.Close>
  )
})
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => {
  return <ToastPrimitives.Title ref={ref} className={cn(twStyles.title, className)} {...props} />
})
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  return <ToastPrimitives.Description ref={ref} className={cn(twStyles.description, className)} {...props} />
})
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
}
