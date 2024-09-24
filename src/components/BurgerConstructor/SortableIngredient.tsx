import { FC } from "react";
import {Ingredient} from "../types";
import {useDrag, useDrop,  } from "react-dnd";
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerConstructor.module.css'

interface SortableIngredientProps {
    ingredient: Ingredient;
    index: number;
    handleRemoveIngredient: (ingredient: Ingredient) => void;
    moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}


const SortableIngredient: FC<SortableIngredientProps> = ({ ingredient, index, handleRemoveIngredient, moveIngredient }) => {
    const [, dragRef] = useDrag({
        type: 'sortable',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'sortable',
        hover: (item: any) => {
            if (item.index !== index) {
                moveIngredient(item.index, index);
                item.index = index;
            }
        },
    });

    const combinedRef = (node: HTMLElement | null) => {
        dragRef(dropRef(node));
    };

    return (
        <div ref={combinedRef} className={styles.element}>
            <div className={styles.icon}>
                <DragIcon type="primary" />
            </div>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                handleClose={() => handleRemoveIngredient(ingredient)}
                thumbnail={ingredient.image}
            />
        </div>
    );
};

export default SortableIngredient;
