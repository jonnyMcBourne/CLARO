import { channel } from 'diagnostics_channel'
import { FC, PropsWithChildren, useReducer } from 'react'
import { Channel } from '../../interfaces/IProgram'
import { UIContext } from './UiContext'
import { UiReducer } from './UiReducer'

interface Props{ }

export interface IUiInitialState
{
    isModalOpen: boolean
    channels:Channel[]
}
export const UiInitialState:IUiInitialState = {
    isModalOpen: false,
    channels: []
}

export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) =>
{
    const [ state, dispatch ] = useReducer(UiReducer, UiInitialState);

    const toggleModal = () =>
    {
        dispatch({type:'[UI]-OPEN-CLOSE-MODAL'})
    }
    const updateChannels = (channels:Channel[]) =>
    {
        dispatch({type:'[UI]-UPDATE-CHANNELS',payload:channels})
    }

  return (
      <UIContext.Provider value={{...state,toggleModal,updateChannels}} >
          {children}
    </UIContext.Provider>
  )
}
