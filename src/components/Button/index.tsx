import clsx from "clsx";
import React from "react";

type ButtonVariants = "default" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariants;
  size: ButtonSizes;
} & React.ComponentProps<"button">;

export function Button({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx("bg-blue-600 text-blue-100"),
    ghost: clsx("bg-slate-200 text-slate-900"),
    danger: clsx("bg-red-600 text-red-100"),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx("text-xs/tight py-1 px-2"),
    md: clsx("text-base/tight py-2 px-4"),
    lg: clsx("text-lg/tight py-4 px-6"),
  };

  const buttonClasses = clsx(buttonVariants[variant], buttonSizes[size]);

  return <button className={buttonClasses} {...props} />;
}
