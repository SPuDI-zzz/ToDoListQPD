import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces/interfaces";
import { tasksApi } from "../../app/services/tasks.api";

interface InitialState {
    tasks: ITask[] | null
}

const initialState: InitialState = {
    tasks: null,
}

const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addMatcher(tasksApi.endpoints.getTasks.matchFulfilled, (state, action) => {
            state.tasks = action.payload;
        })
    },
})

export const { actions, reducer } = slice;
export default slice.reducer;