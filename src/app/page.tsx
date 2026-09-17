import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center p-8">Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center p-8">footer</h1>
      </footer>
    </div>
  );
}
