import {createSlice} from '@reduxjs/toolkit';

const savedSearchesSlice = createSlice({
    name: "Saved Searches",
    initialState: {
        searchTerms: ["chicken", "seafood"]
    },

    reducers: {
        addRecipe: (state, action) => {
            state.searchTerms.push(action.payload);
        },
        clearCache: (state, action) => {
            state.searchTerms.length = 0;
        }
    }
});

export const { addRecipe, clearCache } = savedSearchesSlice.actions;
export default savedSearchesSlice.reducer;