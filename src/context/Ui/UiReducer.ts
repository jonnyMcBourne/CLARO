import { Reducer } from "react";
import { Channel, Event } from "../../interfaces/IProgram";
import { IUiInitialState, UiInitialState } from "./UiProvider";

type action = | { type: '[UI]-OPEN-CLOSE-MODAL' }
    | { type: '[UI]-UPDATE-CHANNELS', payload: Channel[] }
    | { type: '[UI]-UPDATE-DATE', payload: Date }
    | { type: '[UI]-UPDATE-EVENT', payload: Event }
    | { type: '[UI]-UPDATE-QUERY', payload: {currentDateQuery:string, finishDateQuery:string, quantity:string } }

export const UiReducer:Reducer<IUiInitialState,action> = (state= UiInitialState,action) =>
{
    switch (action.type) {
        case '[UI]-OPEN-CLOSE-MODAL':
            return { ...state, isModalOpen: !state.isModalOpen }
        case '[UI]-UPDATE-CHANNELS':
            return { ...state, channels: action.payload }
        case '[UI]-UPDATE-DATE':
            return { ...state, currentDate: action.payload }
        case '[UI]-UPDATE-EVENT':
            return { ...state, event: action.payload }
        case '[UI]-UPDATE-QUERY':
            return {...state, query: action.payload}
        default:
            return {...state}
    }
}