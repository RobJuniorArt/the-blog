// import { drizzleDb } from "../drizzle/index";
// import { postsTable } from "../drizzle/schemas";
// import posts from "./posts.json";

// async function seed() {
//   console.log("Seeding database...");

//   await drizzleDb.insert(postsTable).values(
//     posts.posts.map((post) => ({
//       id: post.id,
//       slug: post.slug,
//       title: post.title,
//       author: post.author ?? "Autor desconhecido",
//       excerpt: post.excerpt,
//       content: post.content,
//       coverImageUrl: post.coverImageUrl,
//       published: post.published,
//       createdAt: post.createdAt,
//       updatedAt: post.updatedAt,
//     })),
//   );

//   console.log("Seed concluído!");
//   process.exit(0);
// }

// seed().catch((err) => {
//   console.error("Erro no seed:", err);
//   process.exit(1);
// });
