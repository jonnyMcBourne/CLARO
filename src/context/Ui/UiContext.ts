import { createContext } from "react";
import { Channel, Event } from "../../interfaces/IProgram";

export interface UiContextProps {
    isModalOpen: boolean
    channels: Channel[]
    currentDate: Date;
    startingTime: Date;
    event: Event | undefined;
    //functions
    toggleModal: () => void
    updateChannels: (channels: Channel[]) => void
    updateEvent: (event: Event) => void
}


export const UIContext = createContext({} as UiContextProps);