import { formatHour } from "@/utils/format-datetime";

export const dynamicParams = false;

export async function generateStaticParams() {
  return []; //se n retornar nada aqui, n tenta gerar o chache de coisas novas
}

export default async function ExampleDinamicPage() {
  const hour = formatHour(Date.now());
  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
