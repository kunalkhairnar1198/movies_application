import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    trendingMovies:[],
    popularMovies:[],
    watchlistMovies:[],
    favoriteMovies:[],
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        
    },
})

export default movieSlice;

