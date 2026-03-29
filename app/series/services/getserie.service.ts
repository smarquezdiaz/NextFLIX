import { apiFetch } from "@/service/api";
import { DeleteSerieResponse, PostSerieRequest, PostSerieResponse } from "../interfaces/postserie.interface";

export function getSeries() {
  return apiFetch("/series");
}

export function postSerie(data: PostSerieRequest): Promise<PostSerieResponse> {
  return apiFetch("/series", {
    method: "POST",
    body: JSON.stringify(data),
  });
}


export function deleteSerie(id: number): Promise<DeleteSerieResponse> {
  return apiFetch(`/series/${id}`, {
    method: "DELETE",
  });
}