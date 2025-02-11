import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie-slice/movieslice";



const store = configureStore({
    reducer:{
    movies:moviesReducer,
    }
})

export default store;