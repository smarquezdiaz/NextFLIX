"use client";
import Card from "@/components/Card";
import { UseGetSerie } from "./hooks/useGetSerie";

export default function SeriesPage() {
  const { series, loading, error } = UseGetSerie();
  
  return (
    <div className="bg-black p-10">
      <h1 className="text-3xl font-bold mb-8 text-white">Series</h1>
      <div className="flex flex-wrap gap-6 ">
        {loading ? (
          <p>Loading Series...</p>
        ) : error ? (
          <p className="text-red-500">Error loading series</p>
        ) : (
          series.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              titulo={serie.titulo}
              genero={serie.genero}
              sinopsis={serie.sinopsis}
              urlPortada={serie.urlPortada}
              estreno={serie.estreno}
              calificacion={serie.calificacion}
              plataforma={serie.plataforma}
            />
          ))
        )}
      </div>
    </div>
  );
}
