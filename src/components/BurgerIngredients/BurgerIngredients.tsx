import NavIngredients from "../NavIngredients";
import ItemIngredient from "../ItemIngredient";
import {getIngredientsMap} from './constants';
import styles from './burgerIngredients.module.css'
import {Ingredient} from "../types";
import {FC, useMemo} from "react";

interface BurgerIngredientsProps {
    onClickIngredient: (ingredient: Ingredient) => void;
    countTimeSelected: { [key: string]: number }
    ingredients: Ingredient[]
}

const BurgerIngredients: FC<BurgerIngredientsProps> = ({onClickIngredient, countTimeSelected, ingredients}) => {
    const ingredientsMap = useMemo(() => getIngredientsMap(ingredients), [ingredients])

    return (
        <div className={styles.ingredients}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <NavIngredients/>
            <div className={styles.container}>
                {ingredientsMap.map(el => (
                    <div key={el.title}>
                        <h2 className="text text_type_main-medium">
                            {el.title}
                        </h2>
                        <div
                            className={styles.ingredientsContainer}
                        >
                            {el.data.map(it =>
                                <ItemIngredient key={it._id} onClickIngredient={onClickIngredient} ingredient={it}
                                                countTimeSelected={countTimeSelected}/>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BurgerIngredients
