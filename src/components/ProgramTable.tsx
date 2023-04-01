import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid, TableHead } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../context/Ui/UiContext';
import { UseProgram } from '../hooks/UseProgram';
import { StickyCell } from './subComponents/StickyCell';
import { baseUrl, hours } from '../utils';



export const ProgramTable = () =>
{

  const { isModalOpen, toggleModal } = useContext(UIContext);
  const { data, error, isLoading } = UseProgram(baseUrl);

  console.log(data?.response.channels)

  return (
    <Box sx={{maxWidth:'100vw',overflowX:'scroll', height:'60vh', position:'absolute', bottom:0,left:0 }} >
      <Table>
        <TableHead>
          <TableRow>
            <StickyCell content='Hoy' />
            {
              hours?.map((hour) => (
                <TableCell key={hour} sx={{minWidth:'300px',}} >{ hour }</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          <StickyCell content='channel 1' />
          <TableCell>Program1</TableCell>
        </TableBody>
      </Table>
    </Box>
  );
}
