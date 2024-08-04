import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerConstructor.module.css'
import {Ingredient} from "../types";
import {FC} from 'react';

interface BurgerConstructorProps {
    selectedIngredient: Ingredient[]
}

const BurgerConstructor: FC<BurgerConstructorProps> = ({selectedIngredient}) => (
        <div className='mb-10'>
            {selectedIngredient.length ?
                selectedIngredient.map((ingredient, index) => {
                    const lastOrFirstElement = index === 0 || index === selectedIngredient.length - 1

                    return lastOrFirstElement ?
                        <div className={styles.element}>
                            <ConstructorElement
                                type={index === 0 ? "top" : 'bottom'}
                                isLocked={true}
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </div> : <div className={styles.element}>
                            <div className={styles.icon}>
                                <DragIcon type="primary"/>
                            </div>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </div>
                }) : <p className="text text_type_main-large">
                    No ingredients selected
                </p>
            }
        </div>
    )

export default BurgerConstructor
