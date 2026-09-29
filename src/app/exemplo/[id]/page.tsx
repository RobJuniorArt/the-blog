import { revalidateExampleAction } from "@/actions/revalidate-examples";
import { formatHour } from "@/utils/format-datetime";

export default async function ExampleDinamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  // Passamos { cache: "no-store" } para forçar a busca de um novo usuário a cada render
  const response = await fetch("https://randomuser.me/api/?results=1", {
    cache: "no-store",
  });

  const json = await response.json();
  const userName = json.results[0].name.first;

  // Este log aparece no TERMINAL do VS Code
  console.log("Nome do usuário:", userName);

  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>
        Hora: {hour} (id: {id})
      </div>

      {/* Exibindo na tela para confirmar que funcionou */}
      <div className="text-2xl text-blue-500 my-4">
        Usuário retornado: {userName}
      </div>

      <form className="py-16" action={revalidateExampleAction}>
        {/* Ajustado de aspas duplas para crases ` ` */}
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />
        <button
          className="bg-amber-500 p-2 rounded hover:bg-amber-600 transition cursor-pointer text-base text-black"
          type="submit"
        >
          revalidate
        </button>
      </form>
    </main>
  );
}
