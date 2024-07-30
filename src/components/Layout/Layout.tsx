import AppHeader from '../AppHeader'
import BurgerIngredients from '../BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor'
import styles from './layout.module.css'
import TotalCost from "../TotalCost";
import {FC, useEffect, useState} from "react";
import {Ingredient} from "../types";
import {selected} from "../../utils/data";

interface LayoutProps {
    ingredients: Ingredient[]
}

const Layout: FC<LayoutProps> = ({ingredients}) => {
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient[]>(selected)
    const [totalCost, setTotalCost] = useState<number>(0)
    const [countTimeSelected, setCountTimeSelected] = useState<{ [key: string]: number }>({})


    const onClickIngredient = (ingredient: Ingredient) => {
        setCountTimeSelected((prev) => {
           return prev[ingredient._id] ? {...prev, [ingredient._id]: prev[ingredient._id] + 1} : {
                ...prev,
                    [ingredient._id]: 1
            }
        })


        setSelectedIngredient([...selectedIngredient, ingredient])
    }

    useEffect(() => {
        const cost = selectedIngredient.reduce((acc, el) => {
            acc += el.price
            return acc
        }, 0)
        setTotalCost(cost)
    }, [selectedIngredient])

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <AppHeader/>
                <main className={styles.main}>
                    <BurgerIngredients ingredients={ingredients} countTimeSelected={countTimeSelected} onClickIngredient={onClickIngredient}/>
                    <div className={styles.burgerConstructor}>
                        <BurgerConstructor selectedIngredient={selectedIngredient}/>
                        <TotalCost totalCost={totalCost}/>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default Layout
