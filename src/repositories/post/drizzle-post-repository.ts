// import { PostModel } from "@/models/post/post-model";
// import { PostRepository } from "./post-repository";
// import { drizzleDb } from "@/db/drizzle/index";
// import { postsTable } from "@/db/drizzle/schemas";
// import { eq } from "drizzle-orm";

// export class DrizzlePostRepository implements PostRepository {
//   async findAllPublic(): Promise<PostModel[]> {
//     const posts = await drizzleDb
//       .select()
//       .from(postsTable)
//       .where(eq(postsTable.published, true));

//     return posts;
//   }

//   async findById(id: string): Promise<PostModel> {
//     const posts = await drizzleDb
//       .select()
//       .from(postsTable)
//       .where(eq(postsTable.id, id));

//     if (!posts[0]) {
//       throw new Error(`Post with id "${id}" not found`);
//     }

//     return posts[0];
//   }

//   async findBySlug(slug: string): Promise<PostModel> {
//     const posts = await drizzleDb
//       .select()
//       .from(postsTable)
//       .where(eq(postsTable.slug, slug));

//     if (!posts[0]) {
//       throw new Error(`Post with slug "${slug}" not found`);
//     }

//     return posts[0];
//   }
// }
