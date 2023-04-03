import { useContext } from 'react';
import { Box } from '@mui/system';
import { UIContext } from '../context/Ui/UiContext';
import { ChannelCell } from './subComponents/ChannelCell';
import { EventCell } from './subComponents';

export const BodyTable = () =>
{
  const { channels } = useContext(UIContext);
  return (
    <Box sx={ { height: '100%', backgroundColor: 'green', width: '100%', position: 'absolute' } }>
        {
        channels.map((channel,i) => (
        <Box sx={ { backgroundColor: 'red', display: 'flex' }} key={`${channel.id}-${i}`} >
            <ChannelCell image={ channel.image } name={ channel.name } number={ channel.number } />
            <Box sx={{display:'flex', width:'100%'}}>
              {
                channel.events.map((event,i) => (
                  <EventCell key={event.id} name={ event.name } duration={ event.duration }  being_date={event.date_begin.toLocaleString() } finish_date={event.date_end.toLocaleString()} />
                ))
              }
        </Box>
      </Box>
          ))
        }
    </Box>

  );
};
