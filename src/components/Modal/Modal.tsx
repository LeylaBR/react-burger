import {Button, CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {FC, ReactElement, useEffect} from 'react';
import {createPortal} from 'react-dom';
import ModalOverlay from "./ModalOverlay";
import styles from './modal.module.css';

interface ModalProps {
    header: string;
    handleCloseModal: () => void
    content: ReactElement
}

const modalRoot: any = document.getElementById("react-modals");

const Modal: FC<ModalProps> = ({header, handleCloseModal, content}) => {
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
                    {content}
                </div>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal
