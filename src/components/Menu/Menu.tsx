import React from 'react'
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './menu.module.css'

const Menu = () => (
    <div className={styles.container}>
        <a href='#' className={styles.item}>
            <BurgerIcon type="primary"/>
            <p className="text text_type_main-default">
                Конструктор
            </p>
        </a>
        <a href='#' className={styles.item}>
            <ListIcon type="secondary"/>
            <p className="text text_type_main-default text_color_inactive">
                Лента заказов
            </p>
        </a>
    </div>
)

export default Menu
