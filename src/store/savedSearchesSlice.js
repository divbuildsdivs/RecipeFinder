import {createSlice} from '@reduxjs/toolkit';

const savedSearchesSlice = createSlice({
    name: "Saved Searches",
    initialState: {
        searchResults:{
            // "chicken": [
            //     "Mango", "Red Mango", "Naga"
            // ],

            // "seafood": [
            //     "Fish", "Crab", "Prawn"
            // ]
        }
    },

    reducers: {

        saveSearchResults: (state, action) => {
            const {key, results} = action.payload;
            state.searchResults[key] = results;
        },
        clearCache: (state, action) => {
            state.searchTerms.length = 0;
        }
    }
});

export const { saveSearchTerms, saveSearchResults, clearCache } = savedSearchesSlice.actions;
export default savedSearchesSlice.reducer;