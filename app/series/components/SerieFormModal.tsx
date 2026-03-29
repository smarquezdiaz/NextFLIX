"use client";

import { useState } from "react";
import { usePostSerie } from "../hooks/usePostSerie";
import { PostSerieRequest } from "../interfaces/postserie.interface";
import { serieSchema } from "@/validations/serie.schema";
import { safeParse } from "valibot";
import Dialog from "@/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Props = {
  trigger: React.ReactNode;
  serie?: PostSerieRequest;
  onSuccess?: () => void;
};

export default function SerieFormModal({ trigger, serie, onSuccess }: Props) {
  const { createSerie, loading, error: apiError } = usePostSerie();
  const [isOpen, setIsOpen] = useState(false);

  const [titulo, setTitulo] = useState(serie?.titulo ?? "");
  const [genero, setGenero] = useState(serie?.genero ?? "");
  const [sinopsis, setSinopsis] = useState(serie?.sinopsis ?? "");
  const [urlPortada, setUrlPortada] = useState(serie?.urlPortada ?? "");
  const [estreno, setEstreno] = useState(
    serie?.estreno ?? new Date().getFullYear(),
  );
  const [calificacion, setCalificacion] = useState(serie?.calificacion ?? 0);
  const [plataforma, setPlataforma] = useState(serie?.plataforma ?? "");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (fieldName: string, fieldValue: string | number) => {
    const updatedPayload: PostSerieRequest = {
      titulo: fieldName === "titulo" ? (fieldValue as string) : titulo,
      genero: fieldName === "genero" ? (fieldValue as string) : genero,
      sinopsis: fieldName === "sinopsis" ? (fieldValue as string) : sinopsis,
      urlPortada:
        fieldName === "urlPortada" ? (fieldValue as string) : urlPortada,
      estreno: fieldName === "estreno" ? (fieldValue as number) : estreno,
      calificacion:
        fieldName === "calificacion" ? (fieldValue as number) : calificacion,
      plataforma:
        fieldName === "plataforma" ? (fieldValue as string) : plataforma,
    };

    const result = safeParse(serieSchema, updatedPayload);

    if (!result.success) {
      const issue = result.issues.find((i) => i.path?.[0]?.key === fieldName);
      if (issue) {
        setErrors((prev) => ({ ...prev, [fieldName]: issue.message }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }
    } else {
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    const payload: PostSerieRequest = {
      titulo,
      genero,
      sinopsis,
      urlPortada,
      estreno,
      calificacion,
      plataforma,
    };

    const result = safeParse(serieSchema, payload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      await createSerie(payload);
      alert("Serie añadida con éxito");
      setIsOpen(false);
      onSuccess?.();
    } catch {
      alert("Error al crear la serie");
    }
  };

  const inputStyle =
    "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
  <Dialog
    trigger={trigger}
    titulo={serie ? "Edit Serie" : "Add Serie"}
    sinopsis="Complete the serie information below."
    size="md"
    open={isOpen}
    onOpenChange={setIsOpen}
    footer={
      <div className="flex gap-3 justify-end">
        <DialogPrimitive.Close asChild>
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
            Cancel
          </button>
        </DialogPrimitive.Close>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-sm"
        >
          {loading ? "Saving..." : "Save Serie"}
        </button>
      </div>
    }
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
      {apiError && (
        <p className="text-red-500 col-span-1 md:col-span-2 text-sm">
          {apiError}
        </p>
      )}

      {/* TITULO */}
      <div className="col-span-1 md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          className={inputStyle}
          placeholder="e.g. Breaking Bad"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
            validateField("titulo", e.target.value);
          }}
        />
        {errors.titulo && (
          <p className="text-red-500 text-xs mt-1">{errors.titulo}</p>
        )}
      </div>

      {/* GENERO */}
      <div>
        <label className="text-sm font-medium text-gray-700">Genre</label>
        <input
          className={inputStyle}
          placeholder="e.g. Drama"
          value={genero}
          onChange={(e) => {
            setGenero(e.target.value);
            validateField("genero", e.target.value);
          }}
        />
        {errors.genero && (
          <p className="text-red-500 text-xs mt-1">{errors.genero}</p>
        )}
      </div>

      {/* PLATAFORMA */}
      <div>
        <label className="text-sm font-medium text-gray-700">Platform</label>
        <input
          className={inputStyle}
          placeholder="e.g. Netflix"
          value={plataforma}
          onChange={(e) => {
            setPlataforma(e.target.value);
            validateField("plataforma", e.target.value);
          }}
        />
        {errors.plataforma && (
          <p className="text-red-500 text-xs mt-1">{errors.plataforma}</p>
        )}
      </div>

      {/* SINOPSIS */}
      <div className="col-span-1 md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Synopsis</label>
        <textarea
          className={inputStyle + " resize-none"}
          rows={3}
          placeholder="Enter the serie's plot summary..."
          value={sinopsis}
          onChange={(e) => {
            setSinopsis(e.target.value);
            validateField("sinopsis", e.target.value);
          }}
        />
        {errors.sinopsis && (
          <p className="text-red-500 text-xs mt-1">{errors.sinopsis}</p>
        )}
      </div>

      {/* ESTRENO */}
      <div>
        <label className="text-sm font-medium text-gray-700">Release Year</label>
        <input
          type="number"
          className={inputStyle}
          placeholder="e.g. 2008"
          value={estreno}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            setEstreno(newValue);
            validateField("estreno", newValue);
          }}
        />
        {errors.estreno && (
          <p className="text-red-500 text-xs mt-1">{errors.estreno}</p>
        )}
      </div>

      {/* CALIFICACION */}
      <div>
        <label className="text-sm font-medium text-gray-700">Rating (0-10)</label>
        <input
          type="number"
          step="0.1"
          className={inputStyle}
          placeholder="e.g. 9.5"
          value={calificacion}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            setCalificacion(newValue);
            validateField("calificacion", newValue);
          }}
        />
        {errors.calificacion && (
          <p className="text-red-500 text-xs mt-1">{errors.calificacion}</p>
        )}
      </div>

      {/* URL PORTADA */}
      <div className="col-span-1 md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Cover URL</label>
        <input
          className={inputStyle}
          placeholder="https://image.com/poster.jpg"
          value={urlPortada}
          onChange={(e) => {
            setUrlPortada(e.target.value);
            validateField("urlPortada", e.target.value);
          }}
        />
        {errors.urlPortada && (
          <p className="text-red-500 text-xs mt-1">{errors.urlPortada}</p>
        )}
      </div>
    </div>
  </Dialog>
);
}
