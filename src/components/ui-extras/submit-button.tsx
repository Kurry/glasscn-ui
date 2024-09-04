"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "../ui/button";

type SubmitButtonProps = ButtonProps & {
  pendingChildren?: ReactNode;
};

export function SubmitButton({
  children,
  pendingChildren,
  disabled,
  ref,
  ...props
}: SubmitButtonProps) {
  const formStatus = useFormStatus();
  const isDisabled = formStatus.pending || disabled;

  return (
    <Button
      ref={ref}
      type="submit"
      loading={formStatus.pending}
      disabled={isDisabled}
      {...props}
    >
      {formStatus.pending ? pendingChildren ?? "Sending..." : children}
    </Button>
  );
}
