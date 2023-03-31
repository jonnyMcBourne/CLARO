import { Reducer } from "react";
import { Channel } from "../../interfaces/IProgram";
import { IUiInitialState, UiInitialState } from "./UiProvider";

type action = | { type: '[UI]-OPEN-CLOSE-MODAL' }
            | { type: '[UI]-UPDATE-CHANNELS',payload: Channel[] }

export const UiReducer:Reducer<IUiInitialState,action> = (state= UiInitialState,action) =>
{
    switch (action.type) {
        case '[UI]-OPEN-CLOSE-MODAL':
            return { ...state, isModalOpen: !state.isModalOpen }
        case '[UI]-UPDATE-CHANNELS':
            return {...state,channels: action.payload }
        default:
            return {...state}
    }
}