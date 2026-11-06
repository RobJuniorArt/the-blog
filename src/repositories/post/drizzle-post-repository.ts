import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle/index";
import { desc, eq, and, or } from "drizzle-orm";
import { postsTable } from "@/db/drizzle/schemas";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.published, true))
      .orderBy(desc(postsTable.createdAt));
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

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
    const posts = await drizzleDb.select().from(postsTable);
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));
    if (!post[0]) {
      throw new Error(`Post with id "${id}" not found`);
    }
    return post[0];
  }

  async create(post: PostModel): Promise<PostModel> {
    const [postExists] = await drizzleDb
      .select({ id: postsTable.id })
      .from(postsTable)
      .where(or(eq(postsTable.id, post.id), eq(postsTable.slug, post.slug)))
      .limit(1);
    if (!!postExists) {
      throw new Error("Post com ID ou Slug já existe na base de dados");
    }

    await drizzleDb.insert(postsTable).values(post);
    return post;
  }

  async delete(id: string): Promise<PostModel> {
    const [post] = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id))
      .limit(1);

    if (!post) {
      throw new Error("Post não existe");
    }

    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));
    return post;
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">,
  ): Promise<PostModel> {
    // 1. Busca o post antigo usando a sintaxe tradicional com select()
    const [oldPost] = await drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id))
      .limit(1);

    if (!oldPost) {
      throw new Error("Post não existe");
    }

    const updatedAt = new Date().toISOString();
    const postData = {
      author: newPostData.author,
      content: newPostData.content,
      coverImageUrl: newPostData.coverImageUrl,
      excerpt: newPostData.excerpt,
      published: newPostData.published,
      title: newPostData.title,
      updatedAt,
    };

    await drizzleDb
      .update(postsTable)
      .set(postData)
      .where(eq(postsTable.id, id));

    return {
      ...oldPost,
      ...postData,
    };
  }
}
