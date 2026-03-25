import { GetSerieResponse } from "../interfaces/getserie.interface";

export async function getSeries(): Promise<GetSerieResponse[]> {
  const response = await fetch("https://nestflix.onrender.com/series");
  if (!response.ok) {
    throw new Error("Error fetching the series");
  }
  const data = await response.json();
  return data;
}
