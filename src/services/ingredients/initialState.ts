import {IngredientsState} from './types'

export const ingredientsInitialState: IngredientsState = {
    data: [],
    selectedIngredients: [],
    selectedBun: null,
    countTimeSelected: {},
    status: 'idle'
}
