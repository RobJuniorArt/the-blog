import { eq } from "drizzle-orm";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  await drizzleDb
    .update(postsTable)
    .set({
      title: "1 Rotina matinal de pessoas altamente eficazes",
    })
    .where(eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"));

  console.log("Título atualizado com sucesso!");
})();
