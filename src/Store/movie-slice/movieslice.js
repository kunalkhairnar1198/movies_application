import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getPopularMoviesEndpoint,
  movieCastEndpoint,
  moviesDetailsEndpoint,
  topRatedMoviesEndpoint,
  trendingMoviesEndpoint,
  upcomingMoviesEndpointPage,
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
      const newMovies = action.payload;

    const updatedMovies = [
        ...state.popularMovies, 
        ...newMovies.filter(
            (newMovie) => !state.popularMovies.some(existingMovie => existingMovie.id === newMovie.id)
        )
    ];

    state.popularMovies = updatedMovies;
    },
    setTopratedMovies: (state, action) => {
      const newMovies = action.payload;

      const updatedMovies = [
          ...state.top_ratedMovies, 
          ...newMovies.filter(
              (newMovie) => !state.top_ratedMovies.some(existingMovie => existingMovie.id === newMovie.id)
          )
      ];
  
      state.top_ratedMovies = updatedMovies; 
      },
    setUpcomingMovies: (state, action) => {
      const newMovies = action.payload;

      const updatedMovies = [
          ...state.upComingMovies, 
          ...newMovies.filter(
              (newMovie) => !state.upComingMovies.some(existingMovie => existingMovie.id === newMovie.id)
          )
      ];
  
      state.upComingMovies = updatedMovies; 
      },
    setDetailsMovies: (state, action) => {
      state.detailsMovie = action.payload;
      // console.log(state.detailsMovie)
    },
    setClearMovieDetails: (state, action) => {
      state.castCredit = null;
      state.detailsMovie = null;
      state.popularMovies= []
      state.top_ratedMovies= []
      state.upComingMovies= []

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
        // console.log('Movie added to favorites:', state.favoriteMovies);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter(
          item => item.id !== action.payload.id,
        );
        // console.log('Movie removed from favorites:', state.favoriteMovies);
      }
    },

    setMovieWatchList: (state, action) => {
      const exists = state.watchlistMovies.some(
        item => item.id === action.payload.id,
      );

      if (!exists) {
        state.watchlistMovies = [...state.watchlistMovies, action.payload];
        // console.log('Movie added to watchlist:', state.watchlistMovies);
      } else {
        state.watchlistMovies = state.watchlistMovies.filter(
          item => item.id !== action.payload.id,
        );
        // console.log('Movie removed from watchlist:', state.watchlistMovies);
      }
    },
  },
});

export const {setTrendingMovies,setPupularMovies,setTopratedMovies,setUpcomingMovies,setDetailsMovies, setClearMovieDetails, setMoviesCast, setMovieFavoriteList, setMovieWatchList} = movieSlice.actions;
export default movieSlice.reducer;

export const getTrendingMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(trendingMoviesEndpoint);
      dispatch(setTrendingMovies(response.data.results));
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };
};

export const getPopularMovies = page => {
  return async dispatch => {
    try {
      const response = await axios.get(getPopularMoviesEndpoint(page));
      // console.log(response.data.results);
      dispatch(setPupularMovies(response.data.results));
    } catch (error) {
      console.log('Error fetching popular Movies', error);
    }
  };
};

export const getDetailMovies = id => {
  return async dispatch => {
    // console.log(id);

    try {
      const response = await axios.get(moviesDetailsEndpoint(id));
      // console.log(response.data)
      const cast_res = await axios.get(movieCastEndpoint(id));

      // console.log(cast_res.data);
      dispatch(setMoviesCast(cast_res.data));
      dispatch(setDetailsMovies(response.data));
    } catch (error) {
      console.log('Error Fetching movies Details', error);
    }
  };
};

export const getTopratedMovies = page => {
  // console.log('API CALLED');
  return async dispatch => {
    try {
      const response = await axios.get(topRatedMoviesEndpoint(page));
      // console.log(response.data.results);
      dispatch(setTopratedMovies(response.data.results));
    } catch (error) {
      console.log('Error Fetching top_rated movies', error);
    }
  };
};

export const getUpcomingMovies = page => {
  return async dispatch => {
    try {
      const response = await axios.get(upcomingMoviesEndpointPage(page));
      // console.log(response.data);
      dispatch(setUpcomingMovies(response.data.results));
    } catch (error) {
      console.log('Error Fetching upcomming movies', error);
    }
  };
};
