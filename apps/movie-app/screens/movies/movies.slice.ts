import { Movie } from "@movie-project/movie-sdk/dist/model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../../app/store";
import moviesSDK from "../../libs/moviesSDK";

export interface MoviesState {
    movies: Movie[];
    loading: boolean;
}

const initialState: MoviesState = {
    movies: [],
    loading: false,
};


const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
})


export const { setMovies, setLoading } = moviesSlice.actions;

export default moviesSlice.reducer

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectLoading = (state: RootState) => state.movies.loading;

export const fetchMoviesAsync = (query: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoading(true));
  
        const movies = await moviesSDK.searchMovies(query)
  
        dispatch(setMovies(movies));
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };
  };