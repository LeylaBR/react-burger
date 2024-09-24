import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { OrderState } from './types';
import { fetchOrder } from './thunks';

export const getExtraReducers = (builder: ActionReducerMapBuilder<OrderState>) => {
    builder
        .addCase(fetchOrder.pending, (state) => {
            state.visibleModal = false;
        })
        .addCase(fetchOrder.fulfilled, (state, action) => {
            state.visibleModal = true;
            state.orderNumber = action.payload;
        })
        .addCase(fetchOrder.rejected, (state, action) => {
            state.visibleModal = false;
        });
};
