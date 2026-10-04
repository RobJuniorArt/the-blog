import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";

export async function findAllPublicPostsCached() {
  "use cache";
  cacheLife("hours");
  cacheTag("posts");
  return await postRepository.findAllPublic();
}

export async function findPublicPostBySlugCached(slug: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(`post-${slug}`);

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}

export async function findPostByIdCached(id: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(`post-id-${id}`);

  return await postRepository.findById(id);
}
