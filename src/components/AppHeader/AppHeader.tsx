import React from "react";
import Menu from "../Menu";
import Profile from '../Profile'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'


const AppHeader = () => (
        <header className={styles.header}>
            <Menu/>
            <Logo/>
            <Profile/>
        </header>
    )

export default AppHeader
