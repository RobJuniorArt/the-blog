import { findAllPostByIdAdmin } from "@/lib/post/queries/admin";

export default async function PostListAdmin() {
  const posts = await findAllPostByIdAdmin();

  return (
    <div className="py-16">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
