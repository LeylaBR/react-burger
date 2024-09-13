import {FC, useState} from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

interface NavIngredientsProps {
    activeSection: string
    onTabClick: (value: string) => void;
}

const NavIngredients: FC<NavIngredientsProps> = ({activeSection, onTabClick}) => {
    return (
        <div style={{ display: 'flex' }} className="mt-5 mb-10">
            <Tab value="булки" active={activeSection === 'Булки'} onClick={() => onTabClick("Булки")}>
                Булки
            </Tab>
            <Tab value="соусы" active={activeSection === 'Соусы'} onClick={() => onTabClick("Соусы")}>
                Соусы
            </Tab>
            <Tab value="начинки" active={activeSection === 'Начинки'} onClick={() => onTabClick("Начинки")}>
                Начинки
            </Tab>
        </div>
    )
}

export default NavIngredients
