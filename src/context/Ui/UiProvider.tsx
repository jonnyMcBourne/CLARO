import axios from 'axios'
import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { Channel, Event, IEpg } from '../../interfaces/IProgram'
import { getDatesForQuery, getStringTail } from '../../utils'
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
    query:{ currentDateQuery: string, finishDateQuery: string; quantity:string}

}
const setStartingTime = (date:Date) =>
{
    
    date.setMinutes(0, 0, 0);

    return date
}
export const UiInitialState: IUiInitialState = {
    isModalOpen: false,
    channels: [],
    currentDate: new Date(),
    startingTime: setStartingTime(new Date(Date.now() - 60 * 60 * 1000)),
    //startingTime: setStartingTime( new Date(Date.now())),
    event: undefined,
    query: { currentDateQuery: '', finishDateQuery: '', quantity: '' }
}



export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) =>
{
    // COMMENT OUT FOR DEPLOYMENT
    // const isFirstRender = useRef(true);

    const [ state, dispatch ] = useReducer(UiReducer, UiInitialState);

    const toggleModal = () =>
    {
        dispatch({type:'[UI]-OPEN-CLOSE-MODAL'})
    }
    const updateChannels = (channels: Channel[]) =>
    {
        const channelsCopy = [ ...state.channels ]; 
        channels.forEach(channel =>
        {
            if (!channelsCopy.find(c => c.id === channel.id))
            {
                channelsCopy.push(channel); 
            }
        });
        dispatch({ type: '[UI]-UPDATE-CHANNELS', payload: channelsCopy });
    } 

    const updateEvent = (event:Event) =>
    {
        dispatch({ type: '[UI]-UPDATE-EVENT', payload: event });
    }


    useEffect(() =>
    {
        dispatch({ type: '[UI]-UPDATE-DATE', payload: new Date() })
    }, []);

    useEffect(() =>
    {
        // COMMENT OUT FOR DEPLOYMENT

        // if (isFirstRender.current)
        // {
        //     isFirstRender.current = false;
        //     return
        // }
        const { currentDate, modifiedDate,quantity } = getDatesForQuery('20');
        dispatch({ type: '[UI]-UPDATE-QUERY', payload: { currentDateQuery: currentDate, finishDateQuery: modifiedDate, quantity } })

        axios.get<IEpg>(getStringTail(currentDate, modifiedDate)).then((resp) =>
        {
            //console.log(resp.data)
            dispatch({ type: '[UI]-UPDATE-CHANNELS', payload: resp.data.response.channels });
        });
    },[])

  return (
      <UIContext.Provider value={{...state,toggleModal,updateChannels,updateEvent}} >
          {children}
    </UIContext.Provider>
  )
}
