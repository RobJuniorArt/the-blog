"use server";

import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";

export async function deletePostAction(id: string) {
  //todo: checar login do usuario
  //todo: remover linhas abaixo
  await asyncDelay(2000);
  logColor("" + id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados invalidos",
    };
  }

  return {
    error: "",
  };
}
