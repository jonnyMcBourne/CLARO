import React, { useContext } from 'react'
import { Box } from '@mui/system'
import { DateStickyCell } from './subComponents'
import { UIContext } from '../context/Ui/UiContext'
import { getInitialhoursArray } from '../utils'
import { TimeHeader } from './subComponents/TimeHeader'

export const HeaderTable = () =>
{
        const { currentDate } = useContext(UIContext);
  
  const hours = getInitialhoursArray(currentDate.getHours() - 1, currentDate.getHours() + 4);

  return (
    <Box sx={ { display: 'flex', width: '100%'} }>
      <DateStickyCell content='Hoy' />
      {
            hours.map((hour,i) =>
        {
              return <Box key={ `${ hour }-${ i }` } sx={ { minWidth: '15%' } }>{ hour}</Box> 
        })
      }
      <Box sx={ { minWidth: '15%', backgroundColor: 'red', position:'sticky', top:0,right:0 } }>Buttons</Box>
    </Box>
  )
}
