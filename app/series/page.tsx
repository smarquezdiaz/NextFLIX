import Card from "@/components/Card";
import { series } from "@/data/series";
import React from "react";

export default function Series() {
  return (
    <div className="bg-black p-10">
      <h1 className="text-3xl font-bold mb-8 text-white">Series</h1>
      <div className="flex flex-wrap gap-6">
        {series.map((serie) => (
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
        ))}
      </div>
    </div>
  );
}
