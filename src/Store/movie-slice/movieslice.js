import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { trendingMoviesEndpoint } from "../../constants/api";

const initialState = {
  trendingMovies: [],
  popularMovies: [],
  watchlistMovies: [],
  favoriteMovies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
  },
});



export const moviesActions = movieSlice.actions;
export default movieSlice.reducer;


export const getTrendingMovies = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(trendingMoviesEndpoint);
        dispatch(movieSlice.actions.setTrendingMovies(response.data.results));
        
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
  };