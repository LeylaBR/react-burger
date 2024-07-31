import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./totalCost.module.css";
import React, {FC, useState} from "react";
import OrderCardModal from "./OrderCardModal";
import Modal from "../Modal";

interface TotalCostProps {
    totalCost: number
}

const TotalCost: FC<TotalCostProps> = ({totalCost}) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        document.body.style.overflow = 'hidden'
        setVisibleModal(true);
    }

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto'
        setVisibleModal(false);
    }

    return (
        <div className={styles.total}>
            <div className={styles.price}>
                <p className="text text_type_main-large">
                    {totalCost}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
            {visibleModal && <Modal handleCloseModal={handleCloseModal} >
                <OrderCardModal />
            </Modal>}
        </div>
    )
}

export default TotalCost
