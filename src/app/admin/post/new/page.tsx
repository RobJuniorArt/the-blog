import { Button } from "@/components/Button";
import { BugIcon } from "lucide-react";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap items-center">
      <Button variant="default" size="sm" type="submit">
        <BugIcon /> Confirm
      </Button>
      <Button variant="ghost" size="md" type="submit">
        <BugIcon />
        Button
      </Button>
      <Button variant="danger" size="lg" type="submit">
        <BugIcon />
        Button
      </Button>
    </div>
  );
}
