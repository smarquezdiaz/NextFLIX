"use client";

import { useState } from "react";
import { PostSerieRequest, PostSerieResponse } from "../interfaces/postserie.interface";
import { postSerie } from "../services/getserie.service";

export function usePostSerie() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSerie = async (
    data: PostSerieRequest,
  ): Promise<PostSerieResponse> => {
    setloading(true);
    setError(null);

    try {
      const createdSerie = await postSerie(data);
      return createdSerie;
    } catch (err) {
      setError("error while creating the serie");
      throw err;
    } finally {
      setloading(false);
    }
  };
  return {
    createSerie,
    loading,
    error,
  };
}
