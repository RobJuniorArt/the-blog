import { formatHour } from "@/utils/format-datetime";

export const dynamicParams = false;
export const revalidate = 10; //atualizada a cada 10 sec

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]; //se n retornar nada aqui, n tenta gerar o chache de coisas novas
}

export default async function ExampleDinamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());
  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>
        Hora: {hour} (id: {id})
      </div>
    </main>
  );
}
