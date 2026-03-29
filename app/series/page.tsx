"use client";
import Card from "@/components/Card";
import { UseGetSerie } from "./hooks/useGetSerie";
import { useState } from "react";
import SerieModal from "./components/SerieModal";
import SerieFormModal from "./components/SerieFormModal";
import { Pencil, Trash2 } from "lucide-react";
import DeleteSerieModal from "./components/DeleteSerieModal";
import SerieDetailModal from "./components/SerieDetailModal";

export default function SeriesPage() {
  const { series, loading, error, refetch } = UseGetSerie();
  const [selectedGenero, setSelectedGenero] = useState("all");

  let parsedSeries: string[] = [];

  series.forEach((serie) => {
    if (serie.genero.includes(",")) {
      parsedSeries = parsedSeries.concat(serie.genero.split(","));
    } else {
      parsedSeries.push(serie.genero);
    }
  });

  const generos = ["all", ...new Set(parsedSeries)];

  const filteredGeneros =
    selectedGenero === "all"
      ? series
      : series.filter((serie) => serie.genero.includes(selectedGenero));

  return (
    <div className="bg-black p-10">
      <h1 className="text-3xl font-bold mb-8 text-white">Series</h1>
      <SerieFormModal
        trigger={
          <button className="mb-6 px-4 py-2 bg-blue-600 text-white rounded">
            Add Serie
          </button>
        }
        onSuccess={refetch}
      />
      <div className="flex gap-2 mb-2">
        {generos.map((genero) => (
          <button
            key={genero}
            onClick={() => setSelectedGenero(genero)}
            className={`px-4 py-2 rounded-full text-sm  transition
             ${
               selectedGenero === genero
                 ? "text-black bg-white"
                 : "text-white bg-gray-800 hover:bg-gray-700"
             }`}
          >
            {genero}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 ">
        {loading ? (
          <p>Loading Series...</p>
        ) : error ? (
          <p className="text-red-500">Error loading series</p>
        ) : (
          filteredGeneros.map((serie) => (
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
              actions={
                <>
                  <SerieFormModal
                    serie={serie}
                    trigger={
                      <button className="text-blue-600 flex items-center gap-1 text-sm">
                        <Pencil size={16} />
                      </button>
                    }
                    onSuccess={refetch}
                  />

                  <DeleteSerieModal
                    serieId={serie.id}
                    onDelete={(id) => console.log("delete", id)}
                    trigger={
                      <button className="text-red-600 flex items-center gap-1 text-sm">
                        <Trash2 size={16} />
                      </button>
                    }
                    onSuccess={refetch}
                  />
                </>
              }
              detailTrigger={
                <SerieDetailModal
                  serie={serie}
                  trigger={
                    <button className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                      See Details
                    </button>
                  }
                />
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
