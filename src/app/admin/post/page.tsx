import PostListAdmin from "@/components/PostListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader clasName="mb-16" />}>
      <PostListAdmin />
    </Suspense>
  );
}
