"use client";

import { useEffect, useState } from "react";
import { GetSerieResponse } from "../interfaces/getserie.interface";
import { getSeries } from "../services/getserie.service";

export function UseGetSerie() {
  const [series, setSeries] = useState<GetSerieResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSeries()
      .then((data) => {
        setSeries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { 
    series, 
    loading,
    error
  }
}
