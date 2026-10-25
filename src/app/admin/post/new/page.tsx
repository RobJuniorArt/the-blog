import { Button } from "@/components/Button";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";

export default async function AdminPostNewPage() {
  return (
    <div>
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm">
          <BugIcon /> Confirm
        </Button>
        <Button variant="ghost" size="md">
          <BugIcon />
          Button
        </Button>
        <Button variant="danger" size="lg">
          <BugIcon />
          Button
        </Button>
      </div>{" "}
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm" disabled>
          <BugIcon /> Confirm
        </Button>
        <Button variant="ghost" size="md" disabled>
          <BugIcon />
          Button
        </Button>
        <Button variant="danger" size="lg" disabled>
          <BugIcon />
          Button
        </Button>

        <Button variant="danger" size="lg" className="w-full">
          <BugIcon />
          Confirm
        </Button>

        <Button variant="ghost" size="lg" className="w-full">
          <BanIcon />
          Cancel
        </Button>

        <Button variant="default" size="lg" className="w-full">
          <CheckIcon />
          OK
        </Button>
      </div>
    </div>
  );
}
