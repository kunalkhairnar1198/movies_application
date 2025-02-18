import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { thunk } from "redux-thunk";

import storage from '@react-native-async-storage/async-storage'
import authReducer from "./auth-slice/authslice";
import moviesReducer from "./movie-slice/movieslice";

const persistConfig ={
    key:'root',
    storage,
    whitelist:['movies', 'auth']
}


const rootReducer = combineReducers({
    auth:authReducer,
    movies:moviesReducer,
})

const persistReducers = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ['someNonSerializableStatePath']
            },
        }).concat(thunk),
});

export const persistor = persistStore(store)

export default store;