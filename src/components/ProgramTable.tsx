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
import { RowChannelCell,StickyCell } from './subComponents';



export const ProgramTable = () =>
{

  const { isModalOpen, toggleModal } = useContext(UIContext);
  const { data, error, isLoading } = UseProgram(baseUrl);

  const handleOnScroll = (e:React.UIEvent<HTMLDivElement>) =>
  {
    const { scrollTop, scrollLeft }= e?.currentTarget

  }

  return (
    <Box>
    </Box>
  );
}
