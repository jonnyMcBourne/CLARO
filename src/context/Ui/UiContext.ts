import { createContext } from "react";

export interface UiContextProps {
    isModalOpen: boolean
    toggleModal: () => void
}

export const UIContext = createContext({} as UiContextProps);