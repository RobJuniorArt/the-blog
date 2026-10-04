"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get("path") || "";
  console.log("Estou em uma server action", path);

  //forçando a revalidação da rota especifica e das tags
  if (path) {
    revalidatePath(path as string);
  }

  // revalidatePath(`${path}`);
  revalidateTag("posts", "max");
  revalidateTag("post-rotina-matinal-de-pessoas-altamente-eficazes", "max");
}
