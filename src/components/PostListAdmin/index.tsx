import { deletePostAction } from "@/actions/post/delete-post-action";
import { findAllPostByIdAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function PostListAdmin() {
  const posts = await findAllPostByIdAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2 px-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between",
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className={clsx(
          "fixed z-50 bg-black/50 inset-0 backdrop-blur-xs",
          "flex items-center justify-center",
        )}
      >
        <div
          className={clsx(
            "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
            "flex flex-col gap-6",
          )}
        >
          <h3>Titulo do dialogo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            repellendus assumenda. Necessitatibus totam fugiat ducimus
            excepturi. Minima laboriosam, sint iste distinctio itaque voluptates
            dolores ea, quibusdam, quidem quasi alias est?
          </p>
          <div className="flex items-center justify-around">
            <button>Cancelar</button>
            <button>Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}
