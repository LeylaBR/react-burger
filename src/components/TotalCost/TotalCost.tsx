import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./totalCost.module.css";
import React, {FC, useContext} from "react";
import {ModalContext} from "../../App";
import OrderCardModal from "./OrderCardModal";

interface TotalCostProps {
    totalCost: number
}

const TotalCost: FC<TotalCostProps> = ({totalCost}) => {
    const context = useContext(ModalContext);

    const modalInfo = {
        header: '',
        content: <OrderCardModal />
    }

    return (
        <div className={styles.total}>
            <div className={styles.price}>
                <p className="text text_type_main-large">
                    {totalCost}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <Button onClick={()=>context.handleOpenModal(modalInfo)} htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}

export default TotalCost
