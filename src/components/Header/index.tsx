"use client";

import clsx from "clsx";

export function Header() {
  return (
    <h1
      className={clsx(
        "text-xl",
        "font-bold",
        "text-blue-500",
        "hover:text-white",
        "hover:bg-amber-950",
        "transition",
        "duration-300",
      )}
    >
      Texto no meu h1
    </h1>
  );
}
