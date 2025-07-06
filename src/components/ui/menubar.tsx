'use client'

import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, CaretRight, Circle } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  menubar: [
    'flex h-10 items-center space-x-1 rounded-md border border-gray-200 bg-white p-1',
    'dark:border-gray-800 dark:bg-gray-950',
  ],
  menubarTrigger: [
    'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm',
    'font-medium outline-none focus:bg-gray-100 focus:text-neutral-900',
    'data-[state=open]:bg-gray-100 data-[state=open]:text-neutral-900',
    'dark:focus:bg-gray-800 dark:focus:text-neutral-50',
    'dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-neutral-50',
  ],
  menubarSubTrigger: [
    'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm',
    'outline-none focus:bg-gray-100 focus:text-neutral-900 data-[state=open]:bg-gray-100',
    'data-[state=open]:text-neutral-900 dark:focus:bg-gray-800 dark:focus:text-neutral-50',
    'dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-neutral-50',
  ],
  menubarSubContent: [
    'z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1',
    'text-neutral-950 data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95',
    'data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950',
    'dark:text-neutral-50',
  ],
  menubarContent: [
    'z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1',
    'text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    'dark:border-gray-800 dark:bg-gray-950 dark:text-neutral-50',
  ],
  menubarItem: [
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm',
    'outline-none focus:bg-gray-100 focus:text-neutral-900 data-[disabled]:pointer-events-none',
    'data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-neutral-50',
  ],
  menubarCheckboxItem: [
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm',
    'outline-none focus:bg-gray-100 focus:text-neutral-900 data-[disabled]:pointer-events-none',
    'data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-neutral-50',
  ],
  menubarRadioItem: [
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm',
    'outline-none focus:bg-gray-100 focus:text-neutral-900 data-[disabled]:pointer-events-none',
    'data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-neutral-50',
  ],
  menubarLabel: 'px-2 py-1.5 text-sm font-semibold',
  menubarSeparator: '-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800',
  menubarShortcut: 'ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400',
  menubarSubTriggerInset: 'pl-8',
  menubarItemInset: 'pl-8',
  menubarLabelInset: 'pl-8',
  menubarItemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  menubarRadioItemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  menubarSubTriggerChevron: 'ml-auto h-4 w-4',
  menubarCheckboxItemCheck: 'h-4 w-4',
  menubarRadioItemCircle: 'h-2 w-2 fill-current',
}

const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <MenubarPrimitive.Root ref={ref} className={cn(twStyles.menubar, className)} {...props} />
})
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  return <MenubarPrimitive.Trigger ref={ref} className={cn(twStyles.menubarTrigger, className)} {...props} />
})
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(twStyles.menubarSubTrigger, inset && twStyles.menubarSubTriggerInset, className)}
      {...props}
    >
      {children}
      <CaretRight className={twStyles.menubarSubTriggerChevron} />
    </MenubarPrimitive.SubTrigger>
  )
})
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  return <MenubarPrimitive.SubContent ref={ref} className={cn(twStyles.menubarSubContent, className)} {...props} />
})
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(twStyles.menubarContent, className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
})
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn(twStyles.menubarItem, inset && twStyles.menubarItemInset, className)}
      {...props}
    />
  )
})
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(twStyles.menubarCheckboxItem, className)}
      checked={checked}
      {...props}
    >
      <span className={twStyles.menubarItemIndicator}>
        <MenubarPrimitive.ItemIndicator>
          <Check className={twStyles.menubarCheckboxItemCheck} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
})
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  return (
    <MenubarPrimitive.RadioItem ref={ref} className={cn(twStyles.menubarRadioItem, className)} {...props}>
      <span className={twStyles.menubarRadioItemIndicator}>
        <MenubarPrimitive.ItemIndicator>
          <Circle className={twStyles.menubarRadioItemCircle} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
})
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(twStyles.menubarLabel, inset && twStyles.menubarLabelInset, className)}
      {...props}
    />
  )
})
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return <MenubarPrimitive.Separator ref={ref} className={cn(twStyles.menubarSeparator, className)} {...props} />
})
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(twStyles.menubarShortcut, className)} {...props} />
}
MenubarShortcut.displayname = 'MenubarShortcut'

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
