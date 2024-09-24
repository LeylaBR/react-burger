import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ingredient } from '../../components/types';
import {getIngredients} from "../../api/getIngredients";

export const fetchIngredients = createAsyncThunk<Ingredient[]>(
    'ingredients/getIngredients',
    async () => {
        return  await getIngredients();
    }
);
