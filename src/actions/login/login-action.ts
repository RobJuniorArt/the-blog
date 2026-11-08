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
      error: "Dados inválidos",
    };
  }

  //Dados que o usuario digitouno form
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  //aqui eu checaria se o usuãrio existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = password === 

  return {
    username: "",
    error: "",
  };
}
