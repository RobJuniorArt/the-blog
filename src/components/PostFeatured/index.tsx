import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const post = {
    slug: "futura query",
    createdAt: "2025-04-08T00:24:38.616Z",
    title: "Rotina matinal de pessoas altamente eficazes",
    excerpt:
      "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.",
  };
  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16", "sm:grid-cols-2 group")}
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Titulo da imagem",
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
