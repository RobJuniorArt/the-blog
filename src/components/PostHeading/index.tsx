import clsx from "clsx";
import Link from "next/link";
import { Children } from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2"; //pra determinar se é h1, h2, link etc
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-4xl/tight sm:text-4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  const commonClasses = "";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link className="group-hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
