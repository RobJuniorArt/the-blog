import { postRepository } from "@/repositories/post";
import { cacheLife, cacheTag } from "next/cache";

export async function findPostByIdAdmin(id: string) {
  "use cache";
  cacheLife("hours");
  cacheTag(`post-id-${id}`);

  return await postRepository.findById(id);
}

export async function findAllPostByIdAdmin() {
  "use cache";
  cacheLife("hours");
  cacheTag(`posts`);

  return await postRepository.findAll();
}
