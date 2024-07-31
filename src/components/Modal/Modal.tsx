import {Button, CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {FC, ReactElement, useEffect} from 'react';
import {createPortal} from 'react-dom';
import ModalOverlay from "./ModalOverlay";
import styles from './modal.module.css';

interface ModalProps {
    handleCloseModal: () => void;
    header?: string;
    children?: ReactElement | null
}

const modalRoot: HTMLElement | null = document.getElementById("react-modals");

const Modal: FC<ModalProps> = ({header, handleCloseModal, children}) => {
    const handleEscClose = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);

    if (!modalRoot) {
        return null
    }

    return createPortal(
        (
            <ModalOverlay handleCloseModal={handleCloseModal}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <div className={header ? styles.header : styles.noHeader}>
                        {Boolean(header) && <p className="text text_type_main-large">{header}</p>}
                        <Button onClick={() => handleCloseModal()} extraClass={styles.button} htmlType="button"
                                type="secondary" size="medium">
                            <CloseIcon type="primary"/>
                        </Button>
                    </div>
                    {children}
                </div>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal
