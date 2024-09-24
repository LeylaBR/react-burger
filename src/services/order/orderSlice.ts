import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {orderInitialState} from './initialState';
import {getExtraReducers} from "./extraReducers";


const orderSlice = createSlice({
    name: 'order',
    initialState: orderInitialState,
    reducers: {
        setVisibleModal: (state, action: PayloadAction<boolean>) => {
            state.visibleModal = action.payload
        },
        setTotalCost: (state, action: PayloadAction<number>) => {
            state.totalCost = action.payload
        },
    },
    selectors: {
        selectVisibleModal: (state) => state.visibleModal,
        selectOrderNumber: (state) => state.orderNumber,
        selectTotalCost: (state) => state.totalCost,
    },
    extraReducers: getExtraReducers,
});

export const orderReducer = orderSlice.reducer;
export const orderSelectors = orderSlice.selectors;
export const orderActions = orderSlice.actions;
