import { URL_ORDER } from '../constants';

export const createOrder = async (ingredientIds: string[]): Promise<number> => {
    const res = await fetch(URL_ORDER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredientIds }),
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    if (!data.success) {
        throw new Error('Order creation failed');
    }

    return data.order.number;
};
