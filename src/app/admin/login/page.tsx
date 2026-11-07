import { InputText } from "@/components/InputText";
import clsx from "clsx";

export default async function AdminLoginPage() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action={action} className="flex-1 flex flex-col gap-6">
        <InputText
          type="text"
          name="username"
          labelText="Usuário"
          placeholder="Seu usuário"
          disabled={isPending}
          defaultValue={state.userame}
        />
      </form>
    </div>
  );
}
