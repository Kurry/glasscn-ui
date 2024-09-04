"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  root: ["relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"],
  image: ["aspect-square h-full w-full"],
  fallback: [
    "flex h-full w-full items-center justify-center rounded-full",
    "bg-gray-100 dark:bg-gray-800",
  ],
};

const Avatar = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(twStyles.root, className)}
    {...props}
  />
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(twStyles.image, className)}
    {...props}
  />
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(twStyles.fallback, className)}
    {...props}
  />
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
