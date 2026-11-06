import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";

import { readFile, writeFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {

  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.readFromDisk();
    if (posts.some((existingPost) => existingPost.id === post.id)) {
      throw new Error(`Post with id "${post.id}" already exists`);
    }

    posts.push(post);
    await writeFile(
      JSON_POSTS_FILE_PATH,
      JSON.stringify({ posts }, null, 2),
      "utf-8",
    );
    return post;
  }

  async delete(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) throw new Error(`Post with id "${id}" not found`);

    const [deletedPost] = posts.splice(index, 1);
    await writeFile(
      JSON_POSTS_FILE_PATH,
      JSON.stringify({ posts }, null, 2),
      "utf-8",
    );
    return deletedPost;
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">,
  ): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) throw new Error(`Post with id "${id}" not found`);

    const updatedPost: PostModel = {
      ...posts[index],
      ...newPostData,
      updatedAt: new Date().toISOString(),
    };
    posts[index] = updatedPost;
    await writeFile(
      JSON_POSTS_FILE_PATH,
      JSON.stringify({ posts }, null, 2),
      "utf-8",
    );
    return updatedPost;
  }

  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();

    console.log("\n", "findAll", "\n");
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new Error(`Post with id "${id}" not found`);
    }

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
      throw new Error(`Post with slug "${slug}" not found`);
    }

    return post;
  }
}

(async () => {})();
