import {FC, ReactElement } from "react";
import styles from './modalOverlay.module.css'

interface ModalOverlayProps {
    children: ReactElement
    handleCloseModal: () => void
}

const ModalOverlay:FC<ModalOverlayProps> = ({children, handleCloseModal}) => (
    <div className={styles.overlay} onClick={handleCloseModal}>{children}</div>
)

export default ModalOverlay
