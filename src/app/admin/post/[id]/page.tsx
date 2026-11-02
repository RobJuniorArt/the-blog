import { ManagerPostForm } from "@/components/Admin/ManagerPostForm";
import { findPostByIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Editar Post",
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();

  if (!post) notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold ">Editar Post</h1>
      <ManagerPostForm post={post} />
    </div>
  );
}
