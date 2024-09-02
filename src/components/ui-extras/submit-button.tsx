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
  ...props
}: SubmitButtonProps) {
  const formStatus = useFormStatus();
  const isDisabled = formStatus.pending || disabled;

  return (
    <Button
      type="submit"
      loading={formStatus.pending}
      disabled={isDisabled}
      {...props}
    >
      {formStatus.pending ? pendingChildren ?? "Sending..." : children}
    </Button>
  );
}
