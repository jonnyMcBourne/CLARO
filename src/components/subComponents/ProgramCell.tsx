import React from 'react';
import { Box } from '@mui/system';
import { Event } from '../../interfaces/IProgram';

export interface ProgramCellProps {
    event: Event;
}

export const ProgramCell: React.FC<ProgramCellProps> = ({ event }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC107',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
    > 
    'program Name'      
    </Box>
  );
};
