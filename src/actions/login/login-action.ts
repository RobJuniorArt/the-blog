"use-server";

import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
  username: "";
  error: "";
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  return {
    username: "",
    error: "",
  };
}
