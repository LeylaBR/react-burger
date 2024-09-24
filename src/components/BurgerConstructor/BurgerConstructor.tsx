import {ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerConstructor.module.css'
import {Ingredient} from "../types";
import {FC} from 'react';
import {useDrop} from 'react-dnd';
import {useAppDispatch} from "../../services/hooks";
import {ingredientsActions} from "../../services/ingredients/ingredientsSlice";
import SortableIngredient from "./SortableIngredient";

interface BurgerConstructorProps {
    selectedIngredients: Ingredient[];
    selectedBun: Ingredient | null;
    onAddIngredient: (ingredient: Ingredient) => void;
}

const BurgerConstructor: FC<BurgerConstructorProps> = ({selectedIngredients, onAddIngredient, selectedBun,}) => {
    const dispatch = useAppDispatch();

    const [{isOver}, dropRef] = useDrop({
        accept: "ingredient",
        drop: (ingredient: Ingredient) => onAddIngredient(ingredient),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const handleRemoveIngredient = (ingredient: Ingredient) => {
        dispatch(ingredientsActions.removeIngredient(ingredient));
    };

    const handleMoveIngredient = (dragIndex: number, hoverIndex: number) => {
        if (dragIndex !== hoverIndex) {
            dispatch(ingredientsActions.moveIngredient({ fromIndex: dragIndex, toIndex: hoverIndex }));
        }
    };


    return <div className={styles.container} ref={dropRef}
                style={{backgroundColor: isOver ? `rgba(133, 133, 173, 20%)` : "inherit"}}>
        {selectedBun && (
            <div className={styles.element}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${selectedBun.name} (верх)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image}
                />
            </div>
        )}
        {selectedIngredients.length ? (
            selectedIngredients.map((ingredient, index) => (
                    <SortableIngredient
                        key={ingredient.key}
                        index={index}
                        ingredient={ingredient}
                        handleRemoveIngredient={handleRemoveIngredient}
                        moveIngredient={handleMoveIngredient}
                    />
                ))
        ) : (
            <p className="text text_type_main-large">Добавьте ингредиенты</p>
        )}
        {selectedBun && (
            <div className={styles.element}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${selectedBun.name} (низ)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image}
                />
            </div>
        )
        }
    </div>
}

export default BurgerConstructor
