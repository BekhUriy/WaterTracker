import { createContext, useCallback, useState } from "react";
import { Backdrop } from "./ModalProvider.styled";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    const toggleModal = useCallback((modal = null) => setModal(modal), []);

    return (
        <ModalContext.Provider value={toggleModal}>
            {modal && <Backdrop>{modal}</Backdrop>}
            {children}
        </ModalContext.Provider>
    )
};

export default ModalProvider;
