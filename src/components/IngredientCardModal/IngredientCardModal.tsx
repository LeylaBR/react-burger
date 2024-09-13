import React from "react";
import styles from "./ingredientCardModal.module.css";
import {useAppSelector} from "../../services/hooks";
import {modalSelectors} from "../../services/modal/modalSlice";
import {Ingredient} from "../types";


const IngredientCardModal = () => {
    const ingredient =  useAppSelector(modalSelectors.selectData) as Ingredient

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
