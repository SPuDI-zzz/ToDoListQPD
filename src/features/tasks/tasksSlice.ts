import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces/interfaces";

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
        
    }
})
