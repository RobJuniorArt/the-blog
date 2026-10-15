import { drizzleDb } from "../drizzle/index";
import { postsTable } from "../drizzle/schemas";
import posts from "./posts.json";

async function seed() {
  console.log("Seeding database...");

  try {
    await drizzleDb
      .insert(postsTable)
      .values(
        posts.posts.map((post) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          author: post.author ?? "Autor desconhecido",
          excerpt: post.excerpt,
          content: post.content,
          coverImageUrl: post.coverImageUrl,
          published: Boolean(post.published),
          createdAt: post.createdAt
            ? new Date(post.createdAt).toISOString()
            : new Date().toISOString(),
          updatedAt: post.updatedAt
            ? new Date(post.updatedAt).toISOString()
            : new Date().toISOString(),
        })),
      )
      .onConflictDoNothing();

    console.log("Seed concluído com sucesso!");
    process.exit(0);
  } catch (err) {
    console.error("Erro no seed:", err);
    process.exit(1);
  }
}

seed();
