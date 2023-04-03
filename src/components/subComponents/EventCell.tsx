import  { FC, useContext, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { cellheigh, formatHour } from '../../utils'
import './styles.css';
import { Event } from '../../interfaces/IProgram';
import { UIContext } from '../../context/Ui/UiContext';

interface Props
{
event:Event
}

export const EventCell: FC<Props> = ({ event}) =>
{
    const { updateEvent}=useContext(UIContext);
    const { name, duration,date_begin,date_end, } = event
    const [ cellWidth, setCellWidth ] = useState(0);

    const getDurationMinutes = (duration: string): number =>
    {
        const [ hours, minutes ] = duration.split(':');  
        return Number(hours) * 60 + Number(minutes);
    }

    const onHover = (event:Event) =>
    {
        updateEvent(event);
    }

    useEffect(() =>
    {
        const durationInMinutes = getDurationMinutes(duration);
        setCellWidth(((durationInMinutes * 40) / 60));
    }, [ duration, cellWidth ]);


    return (
        <Box
            onMouseOver={ () => onHover(event) }
            className="eventContainer"
            sx={ {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3A3C40',
                borderRight: '.2px solid #c5c9d1',
                height: cellheigh,
                minWidth: `${ cellWidth }em`,
                borderBottom: '.2px solid #9a9b9c',
            } }>
            <Typography>{ name }</Typography>
            <Typography>{ `${ formatHour(new Date(date_begin))  } - ${ formatHour(new Date(date_end)) }` }</Typography>  
        </Box>
    )
}
