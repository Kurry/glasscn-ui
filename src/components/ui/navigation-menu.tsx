'use client'

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { CaretDown } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  navigationMenu: 'relative z-10 flex max-w-max flex-1 items-center justify-center',
  navigationMenuList: 'group flex flex-1 list-none items-center justify-center space-x-1',
  navigationMenuItem: '',
  navigationMenuTrigger: [
    'group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2',
    'text-sm font-medium transition-colors hover:bg-gray-100 hover:text-neutral-900',
    'focus:bg-gray-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none',
    'disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50',
    'dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-neutral-50',
    'dark:focus:bg-gray-800 dark:focus:text-neutral-50 dark:data-[active]:bg-gray-800/50',
    'dark:data-[state=open]:bg-gray-800/50',
  ],
  navigationMenuContent: [
    'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
    'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52',
    'data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52',
    'data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
  ],
  navigationMenuLink: '',
  navigationMenuViewport: [
    'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)]',
    'w-full overflow-hidden rounded-md border border-gray-200 bg-white text-neutral-950',
    'shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95',
    'data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
    'dark:border-gray-800 dark:bg-gray-950 dark:text-neutral-50',
  ],
  navigationMenuIndicator: [
    'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
    'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out',
    'data-[state=visible]:fade-in',
  ],
  navigationMenuIndicatorInner: [
    'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md',
    'dark:bg-gray-800',
  ],
  chevronIcon: 'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
}

const navigationMenuTriggerStyle = cva(twStyles.navigationMenuTrigger.join(' '))

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root ref={ref} className={cn(twStyles.navigationMenu, className)} {...props}>
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
})
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => {
  return <NavigationMenuPrimitive.List ref={ref} className={cn(twStyles.navigationMenuList, className)} {...props} />
})
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children} <CaretDown className={twStyles.chevronIcon} aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
})
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Content ref={ref} className={cn(twStyles.navigationMenuContent, className)} {...props} />
  )
})
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
      <NavigationMenuPrimitive.Viewport
        className={cn(twStyles.navigationMenuViewport, className)}
        ref={ref}
        {...props}
      />
    </div>
  )
})
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Indicator ref={ref} className={cn(twStyles.navigationMenuIndicator, className)} {...props}>
      <div className={cn(twStyles.navigationMenuIndicatorInner)} />
    </NavigationMenuPrimitive.Indicator>
  )
})
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
}
