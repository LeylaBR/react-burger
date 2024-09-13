import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./totalCost.module.css";
import React, {FC } from "react";
import OrderCardModal from "./OrderCardModal";
import Modal from "../Modal";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {orderActions, orderSelectors} from "../../services/order/orderSlice";

interface TotalCostProps {
    totalCost: number
    handleCreateOrder: ()=> void
}

const TotalCost: FC<TotalCostProps> = ({totalCost, handleCreateOrder}) => {
    const dispatch = useAppDispatch();
    const visibleModal = useAppSelector(orderSelectors.selectVisibleModal)

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto'
        dispatch(orderActions.setVisibleModal(false))
    }

    return (
        <div className={styles.total}>
            <div className={styles.price}>
                <p className="text text_type_main-large">
                    {totalCost}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <Button onClick={handleCreateOrder} htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
            {visibleModal && <Modal handleCloseModal={handleCloseModal} >
                <OrderCardModal />
            </Modal>}
        </div>
    )
}

export default TotalCost
