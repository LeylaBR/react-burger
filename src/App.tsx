import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Layout from "./components/Layout";
import Modal from './components/Modal';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

export const ModalContext = React.createContext<any>(null);

function App() {
    const [ingredients, setIngredients] = useState([])
    const [visibleModal, setVisibleModal] = useState(false)
    const [modalContent, setModalContent] = useState<any>(null);


    const handleOpenModal = (content: any) => {
        document.body.style.overflow = 'hidden'
        setModalContent(content)
        setVisibleModal(true);

    }

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto'
        setModalContent(null);
        setVisibleModal(false);
    }

    const getData = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setIngredients(data.data))
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getData()
    }, [])


    const contextValues = useMemo(
        () => ({
            handleOpenModal,
            handleCloseModal,
            modalContent
        }),
        [visibleModal, modalContent]
    );

    return (
        <>
            <ModalContext.Provider value={contextValues}>
                <Layout ingredients={ingredients}/>
            </ModalContext.Provider>
            {visibleModal && <Modal handleCloseModal={handleCloseModal} header={modalContent?.header}
                                    content={modalContent?.content}/>}
        </>

    );
}

export default App;
