export const API_KEY = 'ee685f440549ded82e3e87a8eed2f321';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const trendingMoviesEndpoint= `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
export const popularMoviesEndpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}` 

export const trendingMoviesPagesEndpoint= pages =>`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${pages}`
export const moviesDetailsEndpoint =id => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
export const searchMovieEndpoint = params => `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${params}`