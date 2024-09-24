import { Ingredient } from '../components/types';
import { URL_INGREDIENTS } from '../constants';

export const getIngredients = async (): Promise<Ingredient[]> => {
    const res = await fetch(URL_INGREDIENTS);

    if (!res.ok) {
        throw new Error(`Error status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
};
