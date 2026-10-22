import { Button } from "@/components/Button";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap">
      <Button variant="default" type="submit">
        Confirm
      </Button>
      <Button variant="ghost" type="submit">
        Button
      </Button>
      <Button variant="danger" type="submit">
        Button
      </Button>
    </div>
  );
}
