import { createSlice } from "@reduxjs/toolkit";
import { MODAL_STATE } from "../../constants/constants";
import { ICategoryRequest, ICategoryResponse, ITask, ITaskRequest } from "../../interfaces/interfaces";

interface InitialState {
    modalState: MODAL_STATE;
    task?: ITaskRequest;
    category?: ICategoryRequest
}

const initialState:InitialState = {
    modalState: MODAL_STATE.CLOSE,
    task: undefined,
    category: undefined,
}

const slice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setCreateTaskModal: (state) => {
            state.modalState = MODAL_STATE.CREATE;
        },
        setEditTaskModal: (state, action) => {
            state.modalState = MODAL_STATE.EDIT;
            state.task = action.payload;
        },
        setDeleteTaskModal: (state, action) => {
            state.modalState = MODAL_STATE.DELETE;
            state.task = action.payload;
        },
        setCreateCategoryModal: (state) => {
            state.modalState = MODAL_STATE.CREATE;
        },
        setEditCategoryModal: (state, action) => {
            state.modalState = MODAL_STATE.EDIT;
            state.category = action.payload;
        },
        setDeleteCategoryModal: (state, action) => {
            state.modalState = MODAL_STATE.DELETE;
            state.category = action.payload;
        },
        closeModal: (state) => {
            state.modalState = MODAL_STATE.CLOSE;
        }
    }
});

export const { 
    setCreateTaskModal,
    setEditTaskModal,
    setDeleteTaskModal,
    setCreateCategoryModal,
    setEditCategoryModal,
    setDeleteCategoryModal,
    closeModal
} = slice.actions;

export default slice.reducer;
