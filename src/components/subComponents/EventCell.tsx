import React, { FC, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { cellheigh } from '../../utils'

interface Props
{
    name: string
    being_date: string
    finish_date: string,
    duration: string,
}
export const EventCell: FC<Props> = ({ name, being_date, duration, finish_date }) =>
{
    const [ cellWidth, setCellWidth ] = useState(0);

    const getDurationMinutes = (duration: string): number =>
    {
        const [ hours, minutes ] = duration.split(':');  
        return Number(hours) * 60 + Number(minutes);
    }
    useEffect(() =>
    {
        const durationInMinutes = getDurationMinutes(duration);
        setCellWidth(((durationInMinutes * 40) / 60));
    }, [duration,cellWidth]);
  

    return (
        <Box sx={ { display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center' ,backgroundColor: '#3A3C40', borderRight: '.2px solid #c5c9d1', height: cellheigh, minWidth: `${ cellWidth }em`, borderBottom: '.2px solid #9a9b9c',} }>
            <Typography>{ name }</Typography>
            <Typography>{ `${ being_date } - ${ finish_date }` }</Typography>
            <Typography>{ duration }</Typography>
            <Typography>{ getDurationMinutes(duration)}</Typography>
        </Box>
    )
}
