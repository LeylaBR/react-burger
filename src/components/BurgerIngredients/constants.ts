import {Ingredient} from "../types";

export const getIngredientsMap = (data: Ingredient[])=> [
    {
        title: 'Булки',
        data: data.filter(el => el.type === 'bun')
    },
    {
        title: 'Соусы',
        data:  data.filter(el => el.type === 'sauce')
    },
    {
        title: 'Начинки',
        data: data.filter(el => el.type === 'main')
    },
]
