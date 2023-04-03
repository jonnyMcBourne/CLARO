import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UIContext } from '../context/Ui/UiContext'
import { formatHour, formatTime } from '../utils';

export const ProgramDetails = () =>
{
  const { event } = useContext(UIContext);

  return (
      <Box sx={{ backgroundColor:'transparent', backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out', width:'100%', height:'40vh',position:'absolute',top:0,left:0}} >
      <Box sx={{margin:'3%'}}>
        <Typography variant='h1' component='h2' mb={'15px'}> { event?.name } </Typography>
        <Typography>{ `${ formatHour(new Date(event?.date_begin ? event?.date_begin:''  ))} a ${ formatHour(new Date(event?.date_end ? event?.date_end:''   ))} ${  formatTime( event?.duration) } ` }</Typography>
        <Typography>{ event?.description}</Typography>
          </Box>
   </Box>
  )
}
