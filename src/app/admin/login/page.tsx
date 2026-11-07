import clsx from "clsx";

export default async function AdminLoginPage() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action={action} className="flex-1 flex flex-col gap-6">
        Admin Login Page
      </form>
    </div>
  );
}
