export interface SearchMovies {
    id: number;
    name: string;
}

export interface ApiSearchMovies {
    score: number;
    show: SearchMovies;
}

export interface Movie {
    id: number;
    name: string;
    language: string;
    genres: string [];
    premiered: string;
    image: {
        medium: string;
    } |  null;
    summary: string;
}