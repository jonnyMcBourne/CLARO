import React, { useEffect, useRef } from 'react'
import { UIContext } from '../context/Ui/UiContext';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ColumnChannel } from './subComponents';
import { HeaderTable } from './HeaderTable';



export const ProgramTable = () =>
{

  const { isModalOpen, toggleModal, channels, currentDate } = useContext(UIContext);
  const tableRef = useRef<HTMLDivElement>(null);
  
  const handleOnScroll = (e: React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, scrollLeft }= e?.currentTarget
  }
useEffect(() => {
  if (tableRef && tableRef.current) {
    const currentTime = Array.from(
      tableRef.current.querySelectorAll('.MuiBox-root')
    ).find((elem) => (elem as HTMLDivElement).innerText  === `${currentDate.getHours()-1}:30`) as HTMLElement;
    if (currentTime) {
      tableRef.current.scrollLeft = currentTime.offsetLeft;
    }
  }
}, [currentDate]);


  return (
    <Box component='div' sx={{width:'100%',position:'absolute',bottom:0,height:'60%', overflowX:'scroll',overflowY:'scroll'}} ref={tableRef} >
      <HeaderTable/>
      <ColumnChannel />
    </Box>
  );
}
