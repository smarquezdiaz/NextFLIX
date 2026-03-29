"use client";

import Dialog from "@/components/Dialog";

type SerieModalProps = {
  titulo: string;
  sinopsis: string;
};

export default function SerieModal({ titulo, sinopsis }: SerieModalProps) {
  return (
    <Dialog
      trigger={
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          See Details
        </button>
      }
    >
      <h2>{titulo}</h2>
      <p>{sinopsis}</p>
    </Dialog>
  );
}
