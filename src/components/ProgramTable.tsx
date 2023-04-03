import React, { useEffect, useRef, useState } from 'react'
import { UIContext } from '../context/Ui/UiContext';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { HeaderTable } from './HeaderTable';
import { BodyTable } from './BodyTable';
import axios from 'axios';
import { getStringTail } from '../utils';
import { IEpg } from '../interfaces/IProgram';




export const ProgramTable = () =>
{

  const { currentDate, query, updateChannels } = useContext(UIContext);
  const { currentDateQuery, finishDateQuery, quantity } = query
  const [ shownChannels, setShownChannels ] = useState(Number(quantity));
  const tableRef = useRef<HTMLDivElement>(null);
  const [ isMaxReached, setIsMaxReached ] = useState(false);
  
  const handleOnScroll = (e: React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, clientHeight, scrollHeight } = e?.currentTarget;
    if (Math.floor(scrollTop + clientHeight) >= Math.floor(scrollHeight) - 400)
    {
      setShownChannels(prev => prev + 50);
      getMoreChannels(Number(shownChannels) + 50);
    }
  };


  const getMoreChannels = async(ChannelQuanity:number) =>
  {
    if (isMaxReached)
    {
      return;
    }
    const resp = await axios.get<IEpg>(getStringTail(currentDateQuery, finishDateQuery, ChannelQuanity.toString()));
    updateChannels(resp.data.response.channels)
    setIsMaxReached(resp.data.response.total > 140);
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
}, [ currentDate ]);
  


  return (
    <Box component='div' sx={{width:'100%',position:'absolute',bottom:0,height:'60%',overflowY:'scroll'}} ref={tableRef} onScroll={handleOnScroll} >
      <HeaderTable/>
      <BodyTable/>
    </Box>
  );
}
