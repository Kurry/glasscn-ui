import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  root: "relative flex w-full touch-none select-none items-center",
  track:
    "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800",
  range: "absolute h-full bg-neutral-900 dark:bg-neutral-50",
  thumb: [
    "block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white ring-offset-white",
    "transition-colors focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none",
    "disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950",
    "dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  ],
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(twStyles.root, className)}
    {...props}
  >
    <SliderPrimitive.Track className={twStyles.track}>
      <SliderPrimitive.Range className={twStyles.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(twStyles.thumb)} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
