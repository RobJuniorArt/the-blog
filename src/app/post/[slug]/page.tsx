import { metadata } from "@/app/layout";
import { findPostBySlugCached } from "@/lib/post/queries";
import type { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetaData({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return (
    <>
      <h1 className="text-7xl font-extrabold py-16">{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
