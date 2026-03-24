"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { series as initialSeries } from "@/data/series";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [series, setSeries] = useState(initialSeries);
  const [showSeries, setShowSeries] = useState(true);

  return (
    <main className="min-h-screen bg-black-100 flex flex-col items-center justify-center">
      <button
        onClick={() => setShowSeries(!showSeries)}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        {showSeries ? "Hide Series" : "Display Series"}
      </button>
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Featured Series</h1>
        {showSeries && (
          <div className="flex flex-wrap justify-center gap-8">
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
        )}
      </div>
      <Button onclick={() => alert("Thanks for visiting our site!")}>
        Contact support
      </Button>
      <div>
        <Link
          href="/about"
          className="text-gray-400 mt-6 inline-block hover:text-white"
        >
          Go to About
        </Link>
      </div>
    </main>
  );
}
