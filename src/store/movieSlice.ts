import {Movie, SearchMovies} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovie, fetchSearchMovies} from "./moviesThunks";
import {RootState} from "../app/store";

export interface MovieState {
    searchMovies: SearchMovies[];
    movie: Movie | null;
    fetchSearchLoading: boolean;
    fetchMovieLoading: boolean;
}

const initialState: MovieState = {
    searchMovies:[],
    movie: null,
    fetchSearchLoading: false,
    fetchMovieLoading: false
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchSearchMovies.pending,(state) => {
            state.fetchSearchLoading = true;
        });
        builder.addCase(fetchSearchMovies.fulfilled,(state, {payload: searchMovies}: PayloadAction<SearchMovies[]>) => {
            state.fetchSearchLoading = false;
            state.searchMovies = searchMovies;
        });
        builder.addCase(fetchSearchMovies.rejected,(state) => {
            state.fetchSearchLoading = false;
        });

        builder.addCase(fetchMovie.pending,(state) => {
            state.fetchMovieLoading = true;
        });
        builder.addCase(fetchMovie.fulfilled,(state, {payload: movie}: PayloadAction<Movie |  null>) => {
            state.fetchMovieLoading = false;
            state.movie = movie;
        });
        builder.addCase(fetchMovie.rejected,(state) => {
            state.fetchMovieLoading = false;
        });
    }
});

export const movieReducer = moviesSlice.reducer;

export const selectMoviesList = (state: RootState) => state.movies.searchMovies;
export const selectMovie = (state: RootState) => state.movies.movie;
