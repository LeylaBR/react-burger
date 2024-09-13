import React, {FC, useEffect} from "react";
import {fetchIngredients} from "../../services/ingredients/thunks";
import AppHeader from "../AppHeader";
import BurgerIngredients from "../BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor";
import TotalCost from "../TotalCost";
import styles from "./layout.module.css";
import {Ingredient} from "../types";

import {useAppSelector, useAppDispatch} from "../../services/hooks";
import {ingredientsSelectors, ingredientsActions} from "../../services/ingredients/ingredientsSlice";
import {orderActions, orderSelectors} from "../../services/order/orderSlice";
import {fetchOrder} from "../../services/order/thunks";

const Layout: FC = () => {
    const dispatch = useAppDispatch();
    const ingredients = useAppSelector(ingredientsSelectors.selectData)
    const status = useAppSelector(ingredientsSelectors.selectStatus)
    const selectedIngredients = useAppSelector(ingredientsSelectors.selectSelectedIngredients);
    const selectedBun = useAppSelector(ingredientsSelectors.selectSelectedBun);
    const countTimeSelected = useAppSelector(ingredientsSelectors.selectCountTimeSelected)
    const totalCost = useAppSelector(orderSelectors.selectTotalCost)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchIngredients());
        }
    }, [dispatch, status]);

    const handleAddIngredient = (ingredient: Ingredient) => {
        dispatch(ingredientsActions.addIngredient(ingredient));
    };

    const handleCreateOrder = () => {
        let ingredientIds = selectedIngredients.map((ingredient) => ingredient._id);

        if (selectedBun) {
            ingredientIds.push(selectedBun._id)
        }

        dispatch(fetchOrder(ingredientIds));
    };


    useEffect(() => {
        let cost = selectedIngredients.reduce((acc, el) => {
            acc += el.price;
            return acc;
        }, 0);

        if (selectedBun) {
            cost += selectedBun.price * 2;
        }

        dispatch(orderActions.setTotalCost(cost))
    }, [selectedIngredients, selectedBun]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading ingredients</div>;
    }

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <AppHeader/>
                <main className={styles.main}>
                    <BurgerIngredients
                        ingredients={ingredients}
                        countTimeSelected={countTimeSelected}
                    />
                    <div className={styles.burgerConstructor}>
                        <BurgerConstructor selectedIngredients={selectedIngredients}
                                           selectedBun={selectedBun} onAddIngredient={handleAddIngredient}/>
                        <TotalCost totalCost={totalCost} handleCreateOrder={handleCreateOrder}/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Layout;
