import { formatHour } from "@/utils/format-datetime";

export default async function ExemploPage() {
  const hour = formatHour(Date.now());
  return (
    <main className="min-h-150 text-5xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
