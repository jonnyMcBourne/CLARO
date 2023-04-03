import { useContext } from 'react';
import { Box } from '@mui/system';
import { UIContext } from '../context/Ui/UiContext';
import { ChannelCell } from './subComponents/ChannelCell';
import { cellheigh } from '../utils';

export const BodyTable = () =>
{
  const { channels } = useContext(UIContext);
console.log(channels)
  return (
    <Box sx={ { height: '100%', backgroundColor: 'green', width: '100%', position: 'absolute' } }>
        {
        channels.map((channel,i) => (
        <Box sx={ { backgroundColor: 'red', display: 'flex' }} key={`${channel.id}-${i}`} >
            <ChannelCell image={ channel.image } name={ channel.name } number={ channel.number } />
            <Box sx={{display:'flex', width:'100%'}}>
              {
                channel.events.map((event,i) => (
                  <Box sx={ { backgroundColor: 'brown', width: '30%', border: '1px solid black',height:cellheigh } } key={ `${event.id}-${i}` } >{ event.name}</Box>
                ))
              }
        </Box>
      </Box>
          ))
        }
    </Box>

  );
};
