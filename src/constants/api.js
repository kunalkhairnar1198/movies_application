export const API_KEY = 'ee685f440549ded82e3e87a8eed2f321';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const trendingMoviesEndpoint = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
// export const popularMoviesEndpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
// export const topRatedMoviesEndpoint = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
export const upcomingMoviesEndpoint = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
// /movie/upcoming
// https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1

export const movieCastEndpoint = (movieId) => 
  `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

//pages apis

export const trendingMoviesPagesEndpoint = pages =>
  `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${pages}`;

export const moviesDetailsEndpoint = id =>
  `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

export const searchMovieEndpoint = params =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${params}`;

export const getPopularMoviesEndpoint = (page = 1) => 
  `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

export const topRatedMoviesEndpoint = (page = 1) => 
  `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;

export const upcomingMoviesEndpointPage = (page = 1) => 
  `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${encodeURIComponent(page)}`;



// https://api.themoviedb.org/3/movie/939243?language=en-US
