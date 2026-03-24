export type Serie = {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
}

export const series: Serie[] = [
  {
    id: 2,
    titulo: "The Bear",
    genero: "Drama",
    sinopsis: "Un joven chef de alta cocina regresa a Chicago para administrar el negocio de sándwiches de su familia.",
    urlPortada: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0560d824-aa9c-488f-96eb-20caba663b18/compose?aspectRatio=1.78&format=webp&width=1200",
    estreno: 2022,
    calificacion: 8.6,
    plataforma: "Hulu / Star+"
  },
  {
    id: 4,
    titulo: "Jumanji",
    genero: "Adventure",
    sinopsis: "In Jumanji: The Next Level, the gang is back but the game has changed.",
    urlPortada: "https://devsapihub.com/img-movies/2.jpg",
    estreno: 2019,
    calificacion: 3.4,
    plataforma: "Cine"
  },
  {
    id: 6,
    titulo: "The Dark Knight",
    genero: "Action",
    sinopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    urlPortada: "https://devsapihub.com/img-movies/5.jpg",
    estreno: 2008,
    calificacion: 8,
    plataforma: "HBO"
  },
  {
    id: 10,
    titulo: "Breaking bad (Prueba Raul Molina)",
    genero: "Crimen, Trajedia",
    sinopsis: "Un profesor de secundaria que ha sido diagnosticado con un inoperable cáncer de pulmón se dedica a producir y vender metanfetaminas con el fin de asegurar el futuro de su familia.",
    urlPortada: "https://cinepremiere.com.mx/wp-content/uploads/2022/08/Breaking-Bad-reparto-y-mejores-episodios-900x506.jpg",
    estreno: 2024,
    calificacion: 9,
    plataforma: "Netflix"
  },
  {
    id: 12,
    titulo: "Test",
    genero: "Drama",
    sinopsis: "Test description",
    urlPortada: "https://example.com/img.jpg",
    estreno: 2026,
    calificacion: 5,
    plataforma: "Netflix"
  },
  {
    id: 15,
    titulo: "ONE PIECE",
    genero: "Accion, Fantasía y Aventuras",
    sinopsis: "Acompañado de su ecléctica tripulación, el joven pirata Monkey D. Luffy emprende un viaje en busca de un tesoro legendario en esta adaptación del popular manga.",
    urlPortada: "https://4kwallpapers.com/images/walls/thumbs_3t/25732.jpg",
    estreno: 2026,
    calificacion: 7.6,
    plataforma: "Netflix"
  },
  {
    id: 16,
    titulo: "Vengadores (prueba Jhonny)",
    genero: "Ficcion ",
    sinopsis: "Marvel prepara el regreso más ambicioso de los Vengadores en 2026: 'Avengers: Doomsday'. Te contamos quién forma parte del reparto, la fecha de estreno y todo lo que debes saber.",
    urlPortada: "https://imgs.search.brave.com/HAJfHh9tXtw7xV4Z0NMYqf-qllxvx2B1meTQTkOAm0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1hcy5jb20ubXgv/X25leHQvaW1hZ2Uv/P3VybD1odHRwczov/L3N0YXRpYy1saXZl/Lm5tYXMuY29tLm14/L25tYXMtbmV3cy9z/dHlsZXMvY29ydGVf/MTZfOS9jbG91ZC1z/dG9yYWdlLzIwMjYt/MDEvQXZlbmdlcnMt/RG9vbXNkYXktQ3Vh/JUNDJTgxbmRvLVNh/bGUtQ2FzdC1SZXBh/cnRvLU51ZXZhLVBl/bGklQ0MlODFjdWxh/LVZlbmdhZG9yZXMt/MjAyNi5qcGc_aD05/MjA5MjljNCZpdG9r/PVNWa243bnpRJnc9/MTkyMCZxPTc1",
    estreno: 2026,
    calificacion: 5,
    plataforma: "netflix"
  },
  {
    id: 18,
    titulo: "Peaky Blinders(test jhonny)",
    genero: "Dramas",
    sinopsis: "Cuando su hijo se ve envuelto en una conspiración nazi, Tommy Shelby debe salir de su autoexilio y regresar a Birmingham para salvar a su familia y su país.",
    urlPortada: "https://imgs.search.brave.com/9dyWy7PFeHlXWbJDEvcuGrqJ4I5LpzKB1N8bBgS5650/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVh/a3ktYmxpbmRlcnMt/MTYwMC14LTkwMC1w/aWN0dXJlLWtoOXJt/OXFxajY2a3dyNDIu/anBn",
    estreno: 2026,
    calificacion: 5,
    plataforma: "netflix"
  }
];