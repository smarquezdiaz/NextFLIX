"use client";

import { useEffect, useState } from "react";
import { GetSerieResponse } from "../interfaces/getserie.interface";
import { getSeries } from "../services/getserie.service";

export function UseGetSerie() {
  const [series, setSeries] = useState<GetSerieResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); 

  const fetchSeries = async () => {
    setLoading(true);
    try {
      const data = await getSeries();
      setSeries(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return {
    series,
    loading,
    error,
    refetch: fetchSeries, 
  };
}
