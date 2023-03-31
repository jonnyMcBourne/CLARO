import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext } from './UiContext'
import { UiReducer } from './UiReducer'

interface Props{ }

export interface IUiInitialState
{
    isModalOpen:boolean
}
export const UiInitialState:IUiInitialState = {
    isModalOpen: false
}

export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) =>
{
    const [ state, dispatch ] = useReducer(UiReducer, UiInitialState);

    const toggleModal = () =>
    {
        dispatch({type:'[UI]-OPEN-CLOSE-MODAL'})
    }

  return (
      <UIContext.Provider value={{...state,toggleModal}} >
          {children}
    </UIContext.Provider>
  )
}
