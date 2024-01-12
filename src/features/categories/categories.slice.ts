import { createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "../../app/services/categories.api";
import { ICategory } from "../../interfaces/interfaces";

interface InitialState {
    categories: ICategory[] | null
}

const initialState: InitialState = {
    categories: null,
}

const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addMatcher(categoriesApi.endpoints.getCategories.matchFulfilled, (state, action) => {
            state.categories = action.payload;
        })
    },
})

export const { actions, reducer } = slice;
export default slice.reducer;