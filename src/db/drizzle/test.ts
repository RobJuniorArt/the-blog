import { eq } from "drizzle-orm";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  await drizzleDb
    .update(postsTable)
    .set({
      title: "4 Rotina matinal de pessoas altamente eficazes",
      published: true,
    })
    .where(eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"));

  console.log("Título atualizado com sucesso!");
})();
