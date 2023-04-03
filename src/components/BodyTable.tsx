import { useContext } from 'react';
import { Box } from '@mui/system';
import { UIContext } from '../context/Ui/UiContext';
import { ChannelCell } from './subComponents/ChannelCell';
import { EventCell } from './subComponents';
import './styles.css'
import { Translate } from '@mui/icons-material';

export const BodyTable = () =>
{
  const { channels, startingTime } = useContext(UIContext);

  const calculateMarginRight = (startingTime:Date,event_beginning:any) =>
  {
    const dateBegin = new Date(event_beginning);
    const diff = (dateBegin.getTime() - startingTime.getTime()) / (1000 * 60)
    const marginRight = diff * 0.6666666667;
    return `${marginRight}em`;
  }
   
  return (
    <Box sx={ { height: '100%',width:'auto' ,position: 'absolute' } }>
        {
        channels.map((channel,i) => (
        <Box sx={ { display: 'flex' }} key={`${channel.id}-${i}`} >
            <ChannelCell image={ channel.image } name={ channel.name } number={ channel.number } />
            <Box className="container" sx={ { display: 'flex', width: '100%'} }>
              <Box className="row-channel" style={{ transform: `translateX(${calculateMarginRight(startingTime,channel.events[0].date_begin)})` }} sx={{minWidth:'100%', maxWidth:'100%', display:'flex' ,whiteSpace:'nowrap' }} >
                {
                  channel.events.map((event, i) =>
                  {
                   return (
                     <EventCell
                       key={ event.id }
                       event={event}
                     />
                    )
                  })
              }
              </Box>
        </Box>
      </Box>
          ))
        }
    </Box>
  );
};
