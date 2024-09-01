import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  input: [
    "flex items-center gap-2 has-[:disabled]:opacity-50",
    "disabled:cursor-not-allowed",
  ],
  inputGroup: "flex items-center",
  inputSlot: [
    "relative flex h-10 w-10 items-center justify-center border-y border-r border-neutral-200",
    "text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
    "dark:border-neutral-800",
  ],
  inputSlotActive: [
    "z-10 ring-2 ring-neutral-950 ring-offset-white dark:ring-neutral-300",
    "dark:ring-offset-neutral-950",
  ],
  inputSlotCaret: [
    "pointer-events-none absolute inset-0 flex items-center justify-center",
    "after:h-4 after:w-px after:animate-caret-blink after:bg-neutral-950",
    "after:duration-1000 dark:after:bg-neutral-50",
  ],
  separator: "[&>svg]:size-4",
};

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(twStyles.input, containerClassName)}
    className={cn(twStyles.input, className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(twStyles.inputGroup, className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        twStyles.inputSlot,
        isActive && twStyles.inputSlotActive,
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && <div className={cn(twStyles.inputSlotCaret)} />}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
  <div ref={ref} role="separator" className={cn(twStyles.separator)} {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
