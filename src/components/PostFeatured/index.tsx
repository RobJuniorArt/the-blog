import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const post = {
    slug: "futura query",
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
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2026 10:00
        </time>

        <PostHeading as="h1" url={postLink}>
          Post do meu blog
        </PostHeading>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          illum. Veniam incidunt molestias ullam, ipsam repellat exercitationem
          dolor deserunt facere doloremque nulla eaque quisquam sunt praesentium
          aliquam. Vitae, deleniti temporibus!
        </p>
      </div>
    </section>
  );
}
