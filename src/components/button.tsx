import type { ReactNode } from "react";

export type ButtonProps = {
  primary?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({
  primary = false,
  type = "button",
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={onClick} className={primary ? "primary" : ""}>
      {children}
    </button>
  );
}

export { Button };
