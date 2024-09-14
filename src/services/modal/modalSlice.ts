import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { modalInitialState} from './initialState';
import {Ingredient} from "../../components/types";

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalInitialState,
    reducers: {
        setVisibleModal: (state, action: PayloadAction<boolean>) => {
            state.visibleModal = action.payload
        },
        setData: (state, action: PayloadAction<Ingredient>) => {
            state.data = action.payload
        },
        deleteData: (state) => {
            state.data = null
        },
    },
    selectors: {
        selectVisibleModal: (state) => state.visibleModal,
        selectData: (state) => state.data,
    },
});

export const modalReducer = modalSlice.reducer;
export const modalSelectors = modalSlice.selectors;
export const modalActions = modalSlice.actions;
