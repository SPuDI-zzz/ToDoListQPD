import { createSlice } from "@reduxjs/toolkit";
import { ITaskResponse } from "../../interfaces/interfaces";
import { tasksApi } from "../../app/services/tasks.api";

interface InitialState {
    tasks: ITaskResponse[]
}

const initialState: InitialState = {
    tasks: [],
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

export default slice.reducer;
