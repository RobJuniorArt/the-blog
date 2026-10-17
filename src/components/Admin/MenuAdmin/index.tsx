import clsx from "clsx";
import { FileText, HouseIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "flex flex-col",
  );
  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex",
    "transition hover:bg-slate-800",
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
