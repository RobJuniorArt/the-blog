"use-server";

import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  if (!(formData instanceof FormData)) {
    return {
      username: "",
      error: "Teste de Erro",
    };
  }
  return {
    username: "",
    error: "",
  };
}
