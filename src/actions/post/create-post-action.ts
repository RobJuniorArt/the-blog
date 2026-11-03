"use server";

import { PublicPost } from "@/dto/post/dto";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  //todo: verificar se o usuario esta verificado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: [],
    };
  }

  return {
    formState: prevState.formState,
    errors: [],
  };
}
