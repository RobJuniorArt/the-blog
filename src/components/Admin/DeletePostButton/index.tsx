import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  async function handleClick() {
    const result = await deletePostAction(id);
    alert(`o result é: ${result}`);
  }

  return (
    <button
      className={clsx(
        "text-red-500 transition",
        "cursor-pointer",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:scale-120 hover:text-red-700",
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
