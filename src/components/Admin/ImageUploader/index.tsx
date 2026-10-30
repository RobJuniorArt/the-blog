"use client";

import { Button } from "@/components/Button";

export function ImageUploader() {
  return (
    <div className="flex flex-col gap-2">
      <Button type="button" className="self-start" size={"md"}>
        Enviar uma Imagem
      </Button>
      <input className="hidden" name="file" type="file" accept="image/*" />
    </div>
  );
}
