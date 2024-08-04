import React, {FC, useState} from "react";
import styles from './itemIngredient.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import {Ingredient} from "../types";
import IngredientCardModal from "../IngredientCardModal";
import Modal from "../Modal";

interface ItemIngredientProps {
    ingredient: Ingredient
    onClickIngredient: (ingredient: Ingredient) => void;
    countTimeSelected: { [key: string]: number }
}

const ItemIngredient: FC<ItemIngredientProps> = ({ingredient, countTimeSelected}) => {
    const {image, price, name} = ingredient
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        document.body.style.overflow = 'hidden'
        setVisibleModal(true);
    }

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto'
        setVisibleModal(false);
    }

    return (
        <div className={styles.block} onClick={handleOpenModal}>
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
            {visibleModal && <Modal handleCloseModal={handleCloseModal} header='Детали ингредиента'>
                <IngredientCardModal ingredient={ingredient}/>
            </Modal>}
        </div>
    )
}

export default ItemIngredient
