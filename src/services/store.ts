import { configureStore } from '@reduxjs/toolkit';
import { ingredientsReducer } from './ingredients/ingredientsSlice';
import {modalReducer} from "./modal/modalSlice";
import {orderReducer} from "./order/orderSlice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        modal: modalReducer,
        order: orderReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store
