"use server";

import { postRepository } from "@/repositories/post";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: string) {
  //todo: checar login do usuario

  if (!id || typeof id !== "string") {
    return {
      error: "Dados invalidos",
    };
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: "Erro desconhecido",
    };
  }

  revalidatePath("posts");
  revalidatePath(`post-${post.slug}`); // Atualiza a página pública individual do post

  return {
    error: "",
  };
}
