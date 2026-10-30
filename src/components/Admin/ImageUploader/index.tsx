"use client";

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleChooseFile() {
    if (!fileInputRef.current) return; //tem que usar current
    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button
        onClick={handleChooseFile}
        type="button"
        className="self-start"
        size={"md"}
      >
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
