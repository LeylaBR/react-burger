import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ingredientsInitialState} from './initialState';
import {getExtraReducers} from './extraReducers';
import {Ingredient} from "../../components/types";

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: ingredientsInitialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<Ingredient>) => {
            if (action.payload.type === "bun") {
                if (state.selectedBun) {
                    state.countTimeSelected[state.selectedBun._id] -= 2;
                }
                state.selectedBun = action.payload;
                state.countTimeSelected[action.payload._id] =
                    (state.countTimeSelected[action.payload._id] || 0) + 2;
            } else {
                state.selectedIngredients.push(action.payload);
                state.countTimeSelected[action.payload._id] =
                    (state.countTimeSelected[action.payload._id] || 0) + 1;
            }
        },
        removeIngredient: (state, action: PayloadAction<Ingredient>) => {
            if (action.payload.type !== "bun") {
                const index = state.selectedIngredients.findIndex(
                    (item) => item._id === action.payload._id
                );
                if (index !== -1) {
                    state.selectedIngredients.splice(index, 1);
                    state.countTimeSelected[action.payload._id] -= 1;
                }
            }
        },
        moveIngredient: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
            const { fromIndex, toIndex } = action.payload;

            if (fromIndex < 0 || toIndex < 0 || fromIndex >= state.selectedIngredients.length || toIndex >= state.selectedIngredients.length) {
                return;
            }

            const [movedIngredient] = state.selectedIngredients.splice(fromIndex, 1);
            state.selectedIngredients.splice(toIndex, 0, movedIngredient);
        },
    },
    selectors: {
        selectData: (state) => state.data,
        selectStatus: (state) => state.status,
        selectSelectedIngredients: (state) => state.selectedIngredients,
        selectSelectedBun: (state) => state.selectedBun,
        selectCountTimeSelected: (state) => state.countTimeSelected,
    },
    extraReducers: getExtraReducers,
});

export const ingredientsReducer = ingredientsSlice.reducer;
export const ingredientsSelectors = ingredientsSlice.selectors;
export const ingredientsActions = ingredientsSlice.actions;
