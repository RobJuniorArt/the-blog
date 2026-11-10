"use server";

import { makePartialPublicPost } from "@/dto/post/dto";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repositories/post";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba.",
    };
  }

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
