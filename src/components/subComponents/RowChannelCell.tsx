import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import { Box, TableRow, Typography } from '@mui/material';
import { Event } from '../../interfaces/IProgram';
interface Props
{
    channelNumber: string
    channelImgUrl: string
    channelName: string
    channelEvent: Event[];
    id:string
}

export const RowChannelCell: FC<Props> = ({ channelImgUrl, channelNumber, channelName,channelEvent,id }) =>
{
                
    const sortedEvents = channelEvent.map((event: Event) =>
    {
        return { ...event, date_begin: new Date(event.date_begin), date_end: new Date(event.date_end) }
    }
    ).sort((a,b)=> a.date_begin.getHours() - b.date_begin.getHours())

    //console.log('sorted',sortedEvents);
                
            
    return (
        <TableRow>
            <TableCell component='td' sx={ { backgroundColor: '#3A3C40', minWidth: '300px', position: 'sticky', left: 0, zIndex: 1 } }>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Typography sx={ { width: '40%', paddingLeft: '12%' } } variant='h4'>{ channelNumber }</Typography>
                    <p>{ id}</p>
                    <img style={{width:'60%'}} src={ channelImgUrl } alt={ channelName } />
                </Box>
            </TableCell>

        </TableRow>
    )
}
