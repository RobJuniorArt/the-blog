import { revalidateExampleAction } from "@/actions/revalidate-examples";
import { formatHour } from "@/utils/format-datetime";

export const dynamic = "force-static";
// export const revalidate = 10; //atualizada a cada 10 sec, isr sobre tempo

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

      <form
        className="py-16 bg-amber-500 p-2 rounded hover:bg-amber-600 transition cursor-pointer"
        action={revalidateExampleAction}
      >
        <input type="hidden" defaultValue={"/exemplo/${id}"} />
        <button type="submit">revalidate</button>
      </form>
    </main>
  );
}
