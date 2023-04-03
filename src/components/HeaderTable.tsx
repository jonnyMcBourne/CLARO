import React, { useContext } from 'react'
import { Box } from '@mui/system'
import { DateStickyCell } from './subComponents'
import { UIContext } from '../context/Ui/UiContext'
import { cellWidth, formatHour, getDatesArray } from '../utils'

export const HeaderTable = () =>
{
  const { currentDate } = useContext(UIContext);

  const hours = getDatesArray(currentDate.getHours() - 1, 6);

  return (
    <Box sx={ { display: 'flex', width: '5000%', position: 'sticky', top: 0, zIndex:4, backgroundColor:'#3A3C40' } }>
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
