import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle/index";
import { desc, eq } from "drizzle-orm";
import { postsTable } from "@/db/drizzle/schemas";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.published, true))
      .orderBy(desc(postsTable.createdAt));
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {}

  async findAll(): Promise<PostModel[]> {}

  async findById(id: string): Promise<PostModel> {}

  // async findAllPublic(): Promise<PostModel[]> {
  //   const posts = await drizzleDb
  //     .select()
  //     .from(postsTable)
  //     .where(eq(postsTable.published, true));
  //   return posts;
  // }
  // async findById(id: string): Promise<PostModel> {
  //   const posts = await drizzleDb
  //     .select()
  //     .from(postsTable)
  //     .where(eq(postsTable.id, id));
  //   if (!posts[0]) {
  //     throw new Error(`Post with id "${id}" not found`);
  //   }
  //   return posts[0];
  // }
  // async findBySlug(slug: string): Promise<PostModel> {
  //   const posts = await drizzleDb
  //     .select()
  //     .from(postsTable)
  //     .where(eq(postsTable.slug, slug));
  //   if (!posts[0]) {
  //     throw new Error(`Post with slug "${slug}" not found`);
  //   }
  //   return posts[0];
  // }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();
  posts.forEach((post) => console.log(`${post.title}, (${post.published})`));
})();
