"use client";

import clsx from "clsx";
import { CircleXIcon, FileText, HouseIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = clsx(
    "bg-slate-900 text-slate-100 ",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
  );
  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-800 rounded-lg",
    "h-10",
    "shrink-0",
  );
  const openCloseBtnClasses = clsx(linkClasses, "text-blue-200 italic");

  return (
    <nav className={navClasses}>
      <button onClick={() => setIsOpen((s) => !s)} className="">
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="blank">
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
