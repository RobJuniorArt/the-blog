import React from "react";

type ButtonVariants = "default" | "ghost" | "danger";

type ButtonProps = {
  variant: ButtonVariants;
} & React.ComponentProps<"button">;

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} />;
}
