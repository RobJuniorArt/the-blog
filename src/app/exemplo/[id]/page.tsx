import { revalidateExampleAction } from "@/actions/revalidate-examples";
import { formatHourCached } from "@/utils/format-datetime";

export default async function ExampleDinamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  const hour = await formatHourCached();

  // Passamos { cache: "no-store" } para forçar a busca de um novo usuário a cada render
  const response = await fetch("https://randomuser.me/api/?results=1", {
    next: {
      tags: ["randomuser"],
      revalidate: 5,
    },
  });

  const json = await response.json();
  const userName = json.results[0].name.first;

  // Este log aparece no TERMINAL do VS Code
  console.log("Nome do usuário:", userName);

  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>
        name: {userName} Hora: {hour} (id: {id})
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
