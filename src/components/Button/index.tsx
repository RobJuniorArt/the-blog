import clsx from "clsx";
import React from "react";

type ButtonVariants = "default" | "ghost" | "danger";

type ButtonProps = {
  variant: ButtonVariants;
} & React.ComponentProps<"button">;

export function Button({ variant = "default", ...props }: ButtonProps) {
  const buttonVariants = {
    default: clsx("bg-blue-600 text-blue-100"),
    ghost: clsx("bg-slate-200 text-slate-900"),
    danger: clsx("bg-red-600 text-red-100"),
  };

  const buttonClasses = clsx(buttonVariants[variant]);

  return <button className={buttonClasses} {...props} />;
}
