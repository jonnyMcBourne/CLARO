import React from 'react'
import { UIContext } from '../context/Ui/UiContext';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import { useContext } from 'react';
import { UseProgram } from '../hooks/UseProgram';
import { baseUrl, hours } from '../utils';
import { ColumnChannel } from './subComponents';
import { HeaderTable } from './HeaderTable';



export const ProgramTable = () =>
{

  const { isModalOpen, toggleModal, channels,currentDate } = useContext(UIContext);
  console.log(channels);
  console.log(currentDate);
  const { data, error, isLoading, } = UseProgram(baseUrl);

  const handleOnScroll = (e:React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, scrollLeft }= e?.currentTarget

  }

  return (
    <Box sx={{backgroundColor:'yellow',width:'100%',position:'absolute',bottom:0,height:'60%', overflowX:'scroll',overflowY:'scroll'}}>
      <HeaderTable/>
      <ColumnChannel />
    </Box>
  );
}
