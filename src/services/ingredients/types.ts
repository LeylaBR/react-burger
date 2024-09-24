import {Ingredient} from "../../components/types";
import {CommonState} from "../types";

export interface IngredientsState extends CommonState{
    data: Ingredient[];
    selectedIngredients:Ingredient[];
    selectedBun: Ingredient | null;
    countTimeSelected: { [key: string]: number }
}
