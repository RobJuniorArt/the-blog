import { JsonPostRepository } from "@/repositories/post/json-post-repository";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();
})();
