import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../screens/searchMovies/searchMovies.slice";
import movieDetailReducer from "../screens/movieDetail/movieDetail.slice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDetail: movieDetailReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
