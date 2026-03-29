import React from "react";

type CardProps = {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
  actions?: React.ReactNode;
  detailTrigger?: React.ReactNode;
};

export default function Card({
  id,
  titulo,
  genero,
  sinopsis,
  urlPortada,
  estreno,
  calificacion,
  plataforma,
  actions,
  detailTrigger,
}: CardProps) {
  return (
    <div className="relative group bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {actions && (
        <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          {actions}
        </div>
      )}
      <div className="bg-gray-900 shadow-md rounded-xl overflow-hidden w-72 hover:bg-gray-800 transition duration-300">
        <img
          src={urlPortada}
          alt={titulo}
          className="w-full h-48 object-contain p-4  rounded"
        />
        <div className="p-4 flex flex-col gap-2">
          <span className="text-xs bg-blue-300 text-blue-600 font-bold px-2 py-1 rounded w-fit">
            {" "}
            {genero}
          </span>
          <h2 className="text-lg font-semibold text-white-800">{titulo}</h2>
          <p className="text-sm text-gray-500"> {sinopsis.slice(0, 80)}...</p>
          <div className="flex gap-3 items-center mt-2">
            <p className="text-sm text-white-500">{estreno}</p> ●
            <span className="text-sm font-bold text-yellow-300">
              {" "}
              ⭐ {calificacion}
            </span>
            {/* <p className='text-sm text-white-500'>{plataforma}</p>  */}
          </div>
          {detailTrigger && <div className="mt-4">{detailTrigger}</div>}
        </div>
      </div>
    </div>
  );
}
