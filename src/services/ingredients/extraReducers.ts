import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IngredientsState } from './types';
import { fetchIngredients } from './thunks';

export const getExtraReducers = (builder: ActionReducerMapBuilder<IngredientsState>) => {
    builder
        .addCase(fetchIngredients.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchIngredients.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        .addCase(fetchIngredients.rejected, (state) => {
            state.status = 'failed';
        });
};
