"use server";

import { logColor } from "@/utils/log-color";

export async function uploadImageAction() {
  logColor("Olá da action uploadimageaction");

  return {
    user: "senha do usuario",
  };
}
