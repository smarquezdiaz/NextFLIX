export interface PostSerieRequest {
    titulo: string;
    genero: string;
    sinopsis: string;
    urlPortada: string;
    estreno: number;
    calificacion: number;
    plataforma: string;
}

export interface PostSerieResponse {
    id: number;
    titulo: string;
    genero: string;
    sinopsis: string;
    urlPortada: string;
    estreno: number;
    calificacion: number;
    plataforma: string;
}

export interface DeleteSerieResponse {
    id: number;
    titulo: string;
    genero: string;
    sinopsis: string;
    urlPortada: string;
    estreno: number;
    calificacion: number;
    plataforma: string;
}