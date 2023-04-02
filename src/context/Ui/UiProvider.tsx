import axios from 'axios'
import { FC, PropsWithChildren, useEffect, useReducer, useRef } from 'react'
import { Channel, IEpg } from '../../interfaces/IProgram'
import { getStringTail } from '../../utils'
import { UIContext } from './UiContext'
import { UiReducer } from './UiReducer'

interface Props{ }

export interface IUiInitialState
{
    isModalOpen: boolean
    channels: Channel[]
    currentDate: Date;
}
export const UiInitialState:IUiInitialState = {
    isModalOpen: false,
    channels: [],
    currentDate: new Date()
}



export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) =>
{
    const isFirstRender = useRef(true);
    const [ state, dispatch ] = useReducer(UiReducer, UiInitialState);

    const toggleModal = () =>
    {
        dispatch({type:'[UI]-OPEN-CLOSE-MODAL'})
    }
    const updateChannels = (channels:Channel[]) =>
    {
        dispatch({type:'[UI]-UPDATE-CHANNELS',payload:channels})
    }

    useEffect(() =>
    {
        dispatch({ type: '[UI]-UPDATE-DATE', payload: new Date() })
    }, []);

    useEffect(() =>
    {
        if (isFirstRender.current)
        {
            isFirstRender.current = false;
            return;
        }
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth().toLocaleString('en-US', { minimumIntegerDigits: 2 });
        const currentDay = now.getDay().toLocaleString('en-US', { minimumIntegerDigits: 2 });
        const currentHour = now.getHours();
        const currentDate = (currentYear.toString() + currentMonth.toString() + currentDay.toString() + (currentHour-1).toString()) + '3000';
        const modifiedDate = (currentYear.toString() + currentMonth.toString() + currentDay.toString() + (currentHour+4).toString())+'0000';
     
        axios.get<IEpg>(getStringTail(currentDate, modifiedDate)).then((resp) =>
        {
            dispatch({ type: '[UI]-UPDATE-CHANNELS', payload: resp.data.response.channels });
        });
    },[])

  return (
      <UIContext.Provider value={{...state,toggleModal,updateChannels}} >
          {children}
    </UIContext.Provider>
  )
}
