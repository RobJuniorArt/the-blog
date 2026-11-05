"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: string) {
  //todo: checar login do usuario

  if (!id || typeof id !== "string") {
    return {
      error: "Dados invalidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post não existe!",
    };
  }

  try {
    await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: newPost,
        errors: [e.message],
      };
    }
    return {
      formState: newPost,
      errors: ["Erro desconhecido"],
    };
  }

  revalidatePath("posts");
  revalidatePath(`post-${post.slug}`); // Atualiza a página pública individual do post

  return {
    error: "",
  };
}
