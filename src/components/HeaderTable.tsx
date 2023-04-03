import React, { useContext } from 'react'
import { Box } from '@mui/system'
import { DateStickyCell } from './subComponents'
import { UIContext } from '../context/Ui/UiContext'
import { cellWidth, getDatesArray } from '../utils'

export const HeaderTable = () =>
{
  const { currentDate } = useContext(UIContext);

  const hours = getDatesArray(currentDate.getHours() - 1, 6);

  const formatHour = (date: Date) =>
  {
    return `${ date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2 }) }:${ date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}:00`
  }

  return (
    <Box sx={ { display: 'flex', width: '100%', position: 'sticky', top: 0, zIndex:4, backgroundColor:'#3A3C40' } }>
      <DateStickyCell content='Hoy' />
      {
        hours.map((hour, i) =>
        {
          return <Box key={ `${ hour }-${ i }` } sx={ { minWidth: cellWidth, display:'flex', alignItems:'center', justifyContent:'center',borderRight: '.2px solid #c5c9d1' } }>
            <Box>
              { formatHour(hour) }
            </Box>
          </Box>
        })
      }
      <Box sx={ { minWidth: cellWidth, backgroundColor: 'red', position: 'sticky', top: 0, right: 0, zIndex: 4 ,borderRight: '.2px solid #c5c9d1'} }>Buttons</Box>
    </Box>
  )
}
