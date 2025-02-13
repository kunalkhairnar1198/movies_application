import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie-slice/movieslice";
import { thunk } from "redux-thunk";



const store = configureStore({
    reducer:{
    movies:moviesReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store;