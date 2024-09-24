import styles from "../../IngredientCardModal/ingredientCardModal.module.css";
import React from "react";
import done from '../../../images/done.svg'
import {useAppSelector} from "../../../services/hooks";
import {orderSelectors} from "../../../services/order/orderSlice";

const OrderCardModal = () => {
    const orderNumber = useAppSelector(orderSelectors.selectOrderNumber)

   return <div className={styles.content}>
        <p className="text text_type_digits-large mb-8">{orderNumber}</p>
        <p className="text text_type_main-medium mb-15">
            идентификатор заказа
        </p>
        <img src={done} alt='doneImage'/>
        <p className="text text_type_main-medium mb-2 mt-8">
            Ваш заказ начали готовить
        </p>
        <p style={{textAlign: 'center'}} className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
        </p>

    </div>
}

export default OrderCardModal
