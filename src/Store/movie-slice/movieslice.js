import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularMoviesEndpoint, trendingMoviesEndpoint } from "../../constants/api";

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
    setPupularMovies:(state, action)=>{
      state.popularMovies = action.payload;
    }
  },
});



export const moviesActions = movieSlice.actions;
export default movieSlice.reducer;


export const getTrendingMovies = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(trendingMoviesEndpoint);
        dispatch(moviesActions.setTrendingMovies(response.data.results));
        
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
  };

  export const getPopularMovies =()=>{
    return async(dispatch)=>{
      try {
        const response = await axios.get(popularMoviesEndpoint)
        console.log(response.data.results)
        dispatch(moviesActions.setPupularMovies(response.data.results))

      } catch (error) {
        console.log("Error fetching popular Movies", error)
      }
    }
  }