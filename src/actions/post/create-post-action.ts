"use server";

type CreatePostActionState = {
  numero: Number;
};

export async function createPostAction(
  state: CreatePostActionState,
): Promise<CreatePostActionState> {
  console.log({ state });
  return {
    numero: 0,
  };
}
