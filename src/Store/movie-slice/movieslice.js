import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  moviesDetailsEndpoint, popularMoviesEndpoint, trendingMoviesEndpoint } from "../../constants/api";

const initialState = {
  trendingMovies: [],
  popularMovies: [],
  watchlistMovies: [],
  favoriteMovies: [],
  detailsMovie:[],
  loading:true,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
      state.loading = false
    },
    setPupularMovies:(state, action)=>{
      state.popularMovies = action.payload;
    },
    setDetailsMovies:(state, action)=>{
      state.detailsMovie = action.payload
      // console.log(state.detailsMovie)
    },
    isLoadingData:(state, action)=>{
      state.loading = true
    },
  },
});



export const moviesActions = movieSlice.actions;
export default movieSlice.reducer;


export const getTrendingMovies = () => {
    return async (dispatch) => {
      dispatch(moviesActions.isLoadingData())
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

  export const getDetailMovies =(id)=>{
    return async(dispatch)=>{
    console.log(id)

      try { 
        const response = await axios.get(moviesDetailsEndpoint(id));
        // console.log(response.data)
          dispatch(moviesActions.setDetailsMovies(response.data))
      } catch (error) {
          console.log('Error Fetching movies Details', error)
      }
    }
  }