import {
  minLength,
  minValue,
  maxValue,
  number,
  object,
  pipe,
  string,
  url,
} from "valibot";

export const serieSchema = object({
  titulo: pipe(
    string(),
    minLength(3, "El título debe tener al menos 3 caracteres"),
  ),
  genero: pipe(
    string(),
    minLength(3, "El género debe tener al menos 3 caracteres"),
  ),
  sinopsis: pipe(
    string(),
    minLength(10, "La sinopsis debe tener al menos 10 caracteres"),
  ),
  urlPortada: pipe(
    string(), 
    url("La URL de la portada no es válida")
  ),
  estreno: pipe(
    number(),
    minValue(1888, "El año de estreno no es válido"), // El año de la primera película
    maxValue(new Date().getFullYear() + 10, "El año de estreno es demasiado lejano")
  ),
  calificacion: pipe(
    number(),
    minValue(0, "La calificación mínima es 0"),
    maxValue(10, "La calificación máxima es 10")
  ),
  plataforma: pipe(
    string(),
    minLength(2, "El nombre de la plataforma es muy corto")
  ),
});