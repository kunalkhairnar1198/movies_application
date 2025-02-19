import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  movieCastEndpoint,
  moviesDetailsEndpoint,
  popularMoviesEndpoint,
  topRatedMoviesEndpoint,
  trendingMoviesEndpoint,
  upcomingMoviesEndpoint,
} from '../../constants/api';

const initialState = {
  trendingMovies: [],
  popularMovies: [],
  top_ratedMovies: [],
  upComingMovies: [],
  castCredit: null,
  watchlistMovies: [],
  favoriteMovies: [],
  detailsMovie: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    setPupularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopratedMovies: (state, action) => {
      state.top_ratedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    setDetailsMovies: (state, action) => {
      state.detailsMovie = action.payload;
      // console.log(state.detailsMovie)
    },
    setClearMovieDetails: (state, action) => {
      state.castCredit = null;
      state.detailsMovie = null;
    },
    setMoviesCast: (state, action) => {
      state.castCredit = action.payload;
    },
    setMovieFavoriteList: (state, action) => {
      const exists = state.favoriteMovies.some(
        item => item.id === action.payload.id,
      );

      if (!exists) {
        state.favoriteMovies = [...state.favoriteMovies, action.payload];
        console.log('Movie added to favorites:', state.favoriteMovies);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter(
          item => item.id !== action.payload.id,
        );
        console.log('Movie removed from favorites:', state.favoriteMovies);
      }
    },

    setMovieWatchList: (state, action) => {
      const exists = state.watchlistMovies.some(
        item => item.id === action.payload.id,
      );

      if (!exists) {
        state.watchlistMovies = [...state.watchlistMovies, action.payload];
        console.log('Movie added to watchlist:', state.watchlistMovies);
      } else {
        state.watchlistMovies = state.watchlistMovies.filter(
          item => item.id !== action.payload.id,
        );
        console.log('Movie removed from watchlist:', state.watchlistMovies);
      }
    },
  },
});

export const moviesActions = movieSlice.actions;
export default movieSlice.reducer;

export const getTrendingMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(trendingMoviesEndpoint);
      dispatch(moviesActions.setTrendingMovies(response.data.results));
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };
};

export const getPopularMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(popularMoviesEndpoint);
      console.log(response.data.results);
      dispatch(moviesActions.setPupularMovies(response.data.results));
    } catch (error) {
      console.log('Error fetching popular Movies', error);
    }
  };
};

export const getDetailMovies = id => {
  return async dispatch => {
    console.log(id);

    try {
      const response = await axios.get(moviesDetailsEndpoint(id));
      // console.log(response.data)
      const cast_res = await axios.get(movieCastEndpoint(id));

      console.log(cast_res.data);
      dispatch(moviesActions.setMoviesCast(cast_res.data));
      dispatch(moviesActions.setDetailsMovies(response.data));
    } catch (error) {
      console.log('Error Fetching movies Details', error);
    }
  };
};

export const getTopratedMovies = id => {
  return async dispatch => {
    try {
      const response = await axios.get(topRatedMoviesEndpoint);
      console.log(response);
      dispatch(moviesActions.setTopratedMovies(response.data.results));
    } catch (error) {
      console.log('Error Fetching top_rated movies', error);
    }
  };
};

export const getUpcomingMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(upcomingMoviesEndpoint);
      console.log(response.data);
      dispatch(moviesActions.setUpcomingMovies(response.data.results));
    } catch (error) {
      console.log('Error Fetching upcomming movies', error);
    }
  };
};
