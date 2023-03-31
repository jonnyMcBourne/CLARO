import { Reducer } from "react";
import { IUiInitialState, UiInitialState } from "./UiProvider";

type action = | { type: '[UI]-OPEN-CLOSE-MODAL' }

export const UiReducer:Reducer<IUiInitialState,action> = (state= UiInitialState,action) =>
{
    switch (action.type) {
        case '[UI]-OPEN-CLOSE-MODAL':
            return {...state,isModalOpen: !state.isModalOpen}
        default:
            return {...state}
    }
}