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
    startingTime: Date;
    event: Event | undefined;
}
const setStartingTime = (date:Date) =>
{
    
    date.setMinutes(0, 0, 0);

    return date
}
export const UiInitialState:IUiInitialState = {
    isModalOpen: false,
    channels: [],
    currentDate: new Date(),
    startingTime: setStartingTime( new Date(Date.now() - 60 * 60 * 1000)),
    //startingTime: setStartingTime( new Date(Date.now())),
    event: undefined,
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
        const currentMonth = (now.getMonth()+1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
        const currentDay = now.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
        //console.log('currentDay', currentDay);
        const currentHour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours().toString();
        //console.log(currentHour)
        const currentDate = `${currentYear}${currentMonth}${currentDay}${(parseInt(currentHour) - 1).toString().padStart(2, "0")}0000`;
        //console.log('currentDate', currentDate);
        const modifiedDate = `${currentYear}${currentMonth}${currentDay}${(parseInt(currentHour) +4).toString().padStart(2, "0")}3000`;
        //console.log('modifief', modifiedDate);
        //const initialday = (currentYear.toString() + currentMonth.toString() + currentDay.toString() + '000000');
        //console.log({ initialday });
     
        axios.get<IEpg>(getStringTail(currentDate, modifiedDate)).then((resp) =>
        {
            console.log(resp.data)
            dispatch({ type: '[UI]-UPDATE-CHANNELS', payload: resp.data.response.channels });
        });
    },[])

  return (
      <UIContext.Provider value={{...state,toggleModal,updateChannels}} >
          {children}
    </UIContext.Provider>
  )
}
