import React, {FC, useContext} from "react";
import styles from './itemIngredient.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import {Ingredient} from "../types";
import {ModalContext} from "../../App";
import IngredientCardModal from "../IngredientCardModal";

interface ItemIngredientProps {
    ingredient: Ingredient
    onClickIngredient: (ingredient: Ingredient) => void;
    countTimeSelected: { [key: string]: number }
}

const ItemIngredient: FC<ItemIngredientProps> = ({ingredient, countTimeSelected}) => {
    const context = useContext(ModalContext);
    const {image, price, name} = ingredient

    const modalInfo = {
        header: 'Детали ингредиента',
        content: <IngredientCardModal ingredient={ingredient}/>
    }


    return (
        <div className={styles.block} onClick={() =>
            context.handleOpenModal(modalInfo)}>
            <img src={image} className={styles.img} alt='ingredient'/>
            <div className={styles.price}>
                <p className="text text_type_main-medium">
                    {price}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-default">
                {name}
            </p>
            {countTimeSelected[String(ingredient._id)] &&
                <Counter count={countTimeSelected[String(ingredient._id)]} size="default" extraClass="m-1"/>}
        </div>
    )
}

export default ItemIngredient
