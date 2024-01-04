import {SearchMovies} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchSearchMovies} from "./moviesThunks";

export interface MovieState {
    searchMovies: SearchMovies[];
    fetchSearchLoading: boolean;
}

const initialState: MovieState = {
    searchMovies:[],
    fetchSearchLoading: false
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
    }
});

export const movieReducer = moviesSlice.reducer;