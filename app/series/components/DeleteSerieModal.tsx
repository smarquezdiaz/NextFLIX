"use client";

import Dialog from "@/components/Dialog";
import { useState } from "react";
import { useDeleteSerie } from "../hooks/useDeleteSerie";

type Props = {
  trigger: React.ReactNode;
  serieId: number;
  onDelete: (id: number) => void;
  onSuccess?: () => void;
};

export default function DeleteSerieModal({
  trigger,
  serieId,
  onDelete,
  onSuccess,
}: Props) {
  const { removeSerie, loading, error } = useDeleteSerie();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await removeSerie(serieId);
      setIsOpen(false);
      onDelete(serieId);
      onSuccess?.();
      alert("Serie deleted successfully");
    } catch {
      alert("Error while deleting the serie");
    }
  };

  return (
    <Dialog
      trigger={trigger}
      titulo="Delete Serie"
      sinopsis="Are you sure you want to delete this serie?"
      size="sm"
      open={isOpen} 
      onOpenChange={setIsOpen} 
      footer={
        <>
          <button className="px-4 py-2 border rounded">Cancel</button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </>
      }
    >
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <p className="text-gray-600">This action cannot be undone.</p>
    </Dialog>
  );
}
