import { useState } from "react";
import { DeleteSerieResponse } from "../interfaces/postserie.interface";
import { deleteSerie } from "../services/getserie.service";

export function useDeleteSerie() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeSerie = async (id: number): Promise<DeleteSerieResponse> => {
    setloading(true);
    setError(null);
    try {
      const deletedProduct = await deleteSerie(id);
      return deletedProduct;
    } catch (err) {
      setError("No se pudo eliminar el producto");
      throw err;
    } finally {
      setloading(false);
    }
  };

  return {
    removeSerie,
    loading,
    error,
  };
}