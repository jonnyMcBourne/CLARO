import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { DateStickyCell } from './subComponents'

export const HeaderTable = () =>
{
  
  return (
    <Box sx={ { display: 'flex', width: '100%', backgroundColor: 'red' } }>
      <DateStickyCell content='Hoy' />
      <Box sx={ { minWidth: '15%', backgroundColor: 'blue' } }>11:00</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'green' } }>11:30</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'blue' } }>12:00</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'blue' } }>12:30</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'green' } }>13:00</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'blue' } }>13:30</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'blue' } }>14:00</Box>
      <Box sx={ { minWidth: '15%', backgroundColor: 'red', position:'sticky', top:0,right:0 } }>Buttons</Box>
    </Box>
  )
}
