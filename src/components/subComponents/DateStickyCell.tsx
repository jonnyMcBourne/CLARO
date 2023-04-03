import { FC } from 'react';
import { Box } from '@mui/material';
import { columnChannelWidth } from '../../utils';
interface Props
{
    content:string
}

export const DateStickyCell:FC<Props> = ({content}) =>
{
  return (

      <Box sx={ { backgroundColor:'#3A3C40',minWidth: columnChannelWidth,height:'3em' ,position: 'sticky', top:0, left: 0, zIndex: 20 } }>{ content}</Box>

      
  )
}
