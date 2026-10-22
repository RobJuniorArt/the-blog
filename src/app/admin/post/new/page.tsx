import { Button } from "@/components/Button";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap">
      <Button variant="default" size="sm" type="submit">
        Confirm
      </Button>
      <Button variant="ghost" size="md" type="submit">
        Button
      </Button>
      <Button variant="danger" size="lg" type="submit">
        Button
      </Button>
    </div>
  );
}
