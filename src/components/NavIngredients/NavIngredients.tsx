import {useState} from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const NavIngredients = () => {
    const [current, setCurrent] = useState('булки')

    return (
        <div style={{ display: 'flex' }} className="mt-5 mb-10">
            <Tab value="булки" active={current === 'булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="соусы" active={current === 'соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="начинки" active={current === 'начинки'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

export default NavIngredients
