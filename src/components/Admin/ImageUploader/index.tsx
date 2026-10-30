"use client";

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
  const fileInputRef = useRef(null);
  function handleChooFile() {
    //
  }
  return (
    <div className="flex flex-col gap-2 py-4">
      <Button type="button" className="self-start" size={"md"}>
        <ImageUpIcon />
        Enviar uma Imagem
      </Button>
      <input
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
