import { FC } from 'react';
import { Box } from '@mui/material';
interface Props
{
    content:string
}

export const DateStickyCell:FC<Props> = ({content}) =>
{
  return (
      <Box sx={ { backgroundColor:'#3A3C40',minWidth: '10%',height:'3em' ,position: 'sticky', top:0, left: 0, zIndex: 2 } }>{ content}</Box>
  )
}
