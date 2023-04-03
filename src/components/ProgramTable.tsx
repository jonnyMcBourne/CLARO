import React, { useEffect, useRef } from 'react'
import { UIContext } from '../context/Ui/UiContext';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { HeaderTable } from './HeaderTable';
import { BodyTable } from './BodyTable';




export const ProgramTable = () =>
{

  const { currentDate } = useContext(UIContext);
  const tableRef = useRef<HTMLDivElement>(null);
  
  const handleOnScroll = (e: React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, scrollLeft } = e?.currentTarget
  }
useEffect(() => {
  if (tableRef && tableRef.current) {
    const currentTime = Array.from(
      tableRef.current.querySelectorAll('.MuiBox-root')
    ).find((elem) => (elem as HTMLDivElement).innerText  === `${currentDate.getHours()-1}:30:00`) as HTMLElement;
    if (currentTime) {
      tableRef.current.scrollLeft = currentTime.offsetLeft;
    }
  }
}, [currentDate.getHours()]);


  return (
    <Box component='div' sx={{width:'100%',position:'absolute',bottom:0,height:'60%',overflowY:'scroll'}} ref={tableRef} onScroll={handleOnScroll} >
      <HeaderTable/>
      <BodyTable/>
    </Box>
  );
}
