import { loginAction } from "@/actions/login/login-action";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import clsx from "clsx";
import { LogInIcon } from "lucide-react";
import { useActionState } from "react";

export default async function AdminLoginPage() {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action="" className="flex-1 flex flex-col gap-6">
        <InputText
          type="text"
          name="username"
          labelText="Usuário"
          placeholder="Seu usuário"
          disabled={isPending}
        />
        <InputText
          type="password"
          name="password"
          labelText="Senha0"
          placeholder="Sua senha"
          disabled={isPending}
        />
        <Button disabled={isPending} type="submit" className="mt-4" size={"md"}>
          <LogInIcon />
          Entrar
        </Button>
      </form>
    </div>
  );
}
