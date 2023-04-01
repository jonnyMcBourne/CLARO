import React from 'react'
import { UIContext } from '../context/Ui/UiContext';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import { useContext } from 'react';
import { UseProgram } from '../hooks/UseProgram';
import { baseUrl, hours } from '../utils';
import { RowChannelCell,StickyCell } from './subComponents';



export const ProgramTable = () =>
{

  const { isModalOpen, toggleModal } = useContext(UIContext);
  const { data, error, isLoading } = UseProgram(baseUrl);

  const handleOnScroll = (e:React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, scrollLeft }= e?.currentTarget

  }

  return (
    <Box sx={{maxWidth:'100vw',overflowX:'scroll', height:'60vh', position:'absolute', bottom:0,left:0 }} onScroll={handleOnScroll} >
      <Table>
        <TableHead>
          <TableRow>
            <StickyCell content='Hoy' />
            {
              hours?.map((hour) => (
                <TableCell key={hour} sx={{minWidth:'300px', position:'sticky', top:0}} >{ hour }</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data?.response.channels.map((channel,i) => (
              <RowChannelCell
                key={ `${ channel.id }-${ i }` }
                id={channel.id}
                channelName={ channel.name }
                channelNumber={ channel.number } 
                channelImgUrl={ channel.image }
                channelEvent={channel.events}
              />
            ))
          }
          <StickyCell content='channel 1' />
        </TableBody>
      </Table>
    </Box>
  );
}
