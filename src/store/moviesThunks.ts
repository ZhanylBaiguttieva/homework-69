import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiSearchMovies, Movie, SearchMovies} from "../types";
import axiosApi from "../axiosApi";

export const fetchSearchMovies = createAsyncThunk<SearchMovies[], string>(
    'movies/fetchSearchMovies',
    async (movieName) => {
        const response = await axiosApi.get<ApiSearchMovies[]>('search/shows?q=' + movieName);
        const movieData = response.data;
        let searchMovies: SearchMovies[] = [];

        if(movieData.length !== 0) {
           searchMovies = movieData.map((item) => {
               return {
                   id: item.show.id,
                   name: item.show.name,
               };
           });
        }
        return searchMovies;
    }
);

export const fetchMovie = createAsyncThunk<Movie | null, string>(
    'movies/fetchMovie',
    async (movieName) => {
        const response = await axiosApi.get<Movie>('shows/' + movieName);
        const movieData = response.data;

        if(!movieData) {
            return null;
        }
        return movieData;
    }
);
