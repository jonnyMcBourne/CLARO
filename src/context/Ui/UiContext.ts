import { createContext } from "react";
import { Channel } from "../../interfaces/IProgram";

export interface UiContextProps {
    isModalOpen: boolean
    channels: Channel[]
    toggleModal: () => void
    updateChannels: (channels: Channel[]) => void
    currentDate: Date;
}

export const UIContext = createContext({} as UiContextProps);