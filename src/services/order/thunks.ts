import {createAsyncThunk} from '@reduxjs/toolkit';
import {createOrder} from "../../api/createOrder";

export const fetchOrder = createAsyncThunk<number, string[]>(
    'order/createOrder',
    async (ingredientIds: string[]) => {
        return await createOrder(ingredientIds);
    }
);
