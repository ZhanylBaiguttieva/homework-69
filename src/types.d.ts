export interface SearchMovies {
    id: number;
    name: string;
}

export interface ApiSearchMovies {
    score: number;
    show: SearchMovies;
}