import { formatHour } from "@/utils/format-datetime";
import { connection } from "next/server"; // Importe a função de conexão

export default async function ExemploPage() {
  await connection(); // Informa ao Next.js que esta página é dinâmica por solicitação
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
