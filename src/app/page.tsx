import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx("grid grid-cols-1 gap-8 mb-16", "sm:grid-cols-2 group")}
      >
        <Link href={"#"} className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200 group-hover:rotate-3"
            src={"/images/bryen_0.png"}
            alt={"Title of post"}
            width={1200}
            height={720}
            priority
          ></Image>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2026 10:00
          </time>

          <PostHeading as="h1" url="#">
            Post do meu blog
          </PostHeading>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            illum. Veniam incidunt molestias ullam, ipsam repellat
            exercitationem dolor deserunt facere doloremque nulla eaque quisquam
            sunt praesentium aliquam. Vitae, deleniti temporibus!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center p-8">footer</h1>
      </footer>
    </Container>
  );
}
