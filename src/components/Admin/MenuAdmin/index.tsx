"use client";

import clsx from "clsx";
import { FileText, HouseIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = clsx(
    "bg-slate-900 text-slate-100 ",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    //"h-10",
    //"overflow-hidden",
  );
  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex items-center justify-start gap-2",
    "transition hover:bg-slate-800 rounded-lg",
    "h-10",
    "shrink-0",
  );
  return (
    <nav>
      <a href="/" target="blank">
        <HouseIcon />
        Home
      </a>
      <Link href="/admin/post">
        <FileText />
        Posts
      </Link>
    </nav>
  );
}
