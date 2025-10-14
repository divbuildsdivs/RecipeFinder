import { configureStore } from "@reduxjs/toolkit";
import savedSearchesReducer from "./savedSearchesSlice";

export const store = configureStore({
    reducer: {
        savedSearches: savedSearchesReducer,
    }
})