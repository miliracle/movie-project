import { Movie } from "@movie-project/movie-sdk/dist/model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../../app/store";
import moviesSDK from "../../libs/moviesSDK";

export interface MovieDetailState {
    selectedMovie: Movie | null;
    loading: boolean;
}

const initialState: MovieDetailState = {
    selectedMovie: null,
    loading: false,
};


const detailMovieSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {
        setMovieDetail: (state, action: PayloadAction<Movie>) => {
            state.selectedMovie = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
})


export const { setMovieDetail, setLoading } = detailMovieSlice.actions;

export default detailMovieSlice.reducer

export const selectMovieDetail = (state: RootState) => state.movieDetail.selectedMovie;
export const selectMovieDetailLoading = (state: RootState) => state.movieDetail.loading;

export const fetchDetailMovieAsync = (preloadData: Movie) => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoading(true));
  
        const movieDetail = await moviesSDK.getMovieDetail(preloadData.id)
  
        dispatch(setMovieDetail(movieDetail));
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };
  };