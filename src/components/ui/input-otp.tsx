'use client'

import { OTPInput, OTPInputContext } from 'input-otp'
import { DotOutline } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  input: ['flex items-center gap-2 has-[:disabled]:opacity-50', 'disabled:cursor-not-allowed'],
  inputGroup: 'flex items-center',
  inputSlot: [
    'relative flex h-10 w-10 items-center justify-center',
    'text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
    'border-y border-r border-border',
  ],
  inputSlotActive: [
    'z-10',
    // ring size:
    'outline-none ring-2 ring-offset-2',
    // ring color:
    'ring-ring/90',
    // ring offset color:
    'ring-offset-white dark:ring-offset-gray-950',
  ],
  inputSlotCaret: [
    'pointer-events-none absolute inset-0 flex items-center justify-center',
    'after:h-4 after:w-px after:animate-caret-blink after:duration-1000',
    'after:bg-gray-950 dark:after:bg-gray-50',
  ],
  separator: '[&>svg]:size-4',
}

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => {
    return (
      <OTPInput
        ref={ref}
        containerClassName={cn(twStyles.input, containerClassName)}
        className={cn(twStyles.input, className)}
        {...props}
      />
    )
  },
)
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(twStyles.inputGroup, className)} {...props} />
  },
)
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & {
    index: number
  }
>(({ className, index, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div ref={ref} className={cn(twStyles.inputSlot, isActive && twStyles.inputSlotActive, className)} {...props}>
      {char}
      {hasFakeCaret && <div className={cn(twStyles.inputSlotCaret)} />}
    </div>
  )
})

const InputOTPSeparator = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(twStyles.separator)} {...props}>
        <DotOutline />
      </div>
    )
  },
)
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
