import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle/index";
import { desc, eq, and } from "drizzle-orm";
import { postsTable } from "@/db/drizzle/schemas";
import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findAllPublic", Date.now());

    const posts = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.published, true))
      .orderBy(desc(postsTable.createdAt));
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findBySlugPublic", Date.now());

    const post = await drizzleDb
      .select()
      .from(postsTable)
      .where(and(eq(postsTable.published, true), eq(postsTable.slug, slug)));
    //validar se nao pode dar erro no return
    if (!post[0]) {
      throw new Error(`Post with slug "${slug}" not found`);
    }
    return post[0];
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findAll", Date.now());
    const posts = await drizzleDb.select().from(postsTable);
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findById", Date.now());

    const post = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));
    if (!post[0]) {
      throw new Error(`Post with id "${id}" not found`);
    }
    return post[0];
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findById("6b204dab-2312-4525-820a-a0463560835f");
//   //posts.forEach((post) => console.log(`${post.title}, (${post.published})`));
//   //console.log(posts);
// })();
