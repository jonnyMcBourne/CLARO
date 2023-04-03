import { createContext } from "react";
import { Channel } from "../../interfaces/IProgram";

export interface UiContextProps {
    isModalOpen: boolean
    channels: Channel[]
    toggleModal: () => void
    updateChannels: (channels: Channel[]) => void
    currentDate: Date;
    startingTime: Date;
    event: Event|undefined;
}

export const UIContext = createContext({} as UiContextProps);