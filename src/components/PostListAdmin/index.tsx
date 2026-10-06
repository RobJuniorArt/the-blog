import { findAllPostByIdAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";

export default async function PostListAdmin() {
  const posts = await findAllPostByIdAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx("py-2 px-2", !post.published && "bg-slate-300")}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
