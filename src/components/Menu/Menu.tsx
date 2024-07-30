import React from 'react'
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './menu.module.css'

const Menu = () =>  (
        <div className={styles.container}>
            <div className={styles.item}>
                <BurgerIcon type="primary"/>
                <p className="text text_type_main-default">
                    Конструктор
                </p>
            </div>
            <div className={styles.item}>
                <ListIcon type="secondary"/>
                <p className="text text_type_main-default text_color_inactive">
                    Лента заказов
                </p>
            </div>
        </div>
    )

export default Menu
