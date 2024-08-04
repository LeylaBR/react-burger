import {Ingredient} from "../types";
import React, {FC} from "react";
import styles from "./ingredientCardModal.module.css";

interface IngredientCardModalProps {
    ingredient: Ingredient
}

const IngredientCardModal: FC<IngredientCardModalProps> = ({ingredient}) => {
    const {image, name, calories,proteins, fat, carbohydrates} = ingredient

    return (
        <div className={styles.content}>
            <img src={image} className={styles.img} alt='ingredient'/>
            <p className="text text_type_main-medium mb-8">
                {name}
            </p>
            <div className={styles.composition}>
                <p style={{textAlign: 'center'}} className="text text_type_main-default text_color_inactive">
                    Калории,ккал{'\n'}
                    {calories}
                </p>
                <p style={{textAlign: 'center'}} className="text text_type_main-default text_color_inactive">
                    Белки, г{'\n'}
                    {proteins}
                </p>
                <p style={{textAlign: 'center'}} className="text text_type_main-default text_color_inactive">
                    Жиры, г{'\n'}
                    {fat}
                </p>
                <p style={{textAlign: 'center'}} className="text text_type_main-default text_color_inactive">
                    Углеводы, г{'\n'}
                    {carbohydrates}
                </p>
            </div>
        </div>
    )
}

export default IngredientCardModal
