"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {year ?? ""} - </span>
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}
