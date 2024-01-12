import { createSlice } from "@reduxjs/toolkit";
import { MODAL_STATE } from "../../constants/constants";

interface InitialState {
    modalState: MODAL_STATE;
}

const initialState:InitialState = {
    modalState: MODAL_STATE.CLOSE,
}

const slice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.modalState = action.payload;
        },
        
        closeModal: (state) => {
            state.modalState = MODAL_STATE.CLOSE;
        }
    }
});

export const { setOpenModal, closeModal } = slice.actions;
export default slice.reducer;
