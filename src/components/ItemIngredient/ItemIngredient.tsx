import React, {FC} from "react";
import styles from './itemIngredient.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import {Ingredient} from "../types";
import IngredientCardModal from "../IngredientCardModal";
import Modal from "../Modal";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {modalActions, modalSelectors} from "../../services/modal/modalSlice";
import {useDrag} from "react-dnd";

interface ItemIngredientProps {
    ingredient: Ingredient
    countTimeSelected: { [key: string]: number }
}

const ItemIngredient: FC<ItemIngredientProps> = ({ingredient, countTimeSelected}) => {
    const {image, price, name} = ingredient
    const dispatch = useAppDispatch();
    const visibleModal = useAppSelector(modalSelectors.selectVisibleModal)

    const [{ isDragging }, dragRef] = useDrag({
        type: "ingredient",
        item: { ...ingredient },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const handleOpenModal = () => {
        document.body.style.overflow = 'hidden'
        dispatch(modalActions.setData(ingredient))
        dispatch(modalActions.setVisibleModal(true))
    }

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto'
        dispatch(modalActions.deleteData())
        dispatch(modalActions.setVisibleModal(false))
    }

    return (
        <div className={styles.block} onClick={handleOpenModal} ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
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
            {countTimeSelected[String(ingredient._id)] ?
                <Counter count={countTimeSelected[String(ingredient._id)]} size="default" extraClass="m-1"/> : null}
            {visibleModal && <Modal handleCloseModal={handleCloseModal} header='Детали ингредиента'>
                <IngredientCardModal />
            </Modal>}
        </div>
    )
}

export default ItemIngredient
