import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
interface Props
{
    content:string
}

export const StickyCell:FC<Props> = ({content}) =>
{
  return (
      <TableCell sx={ { backgroundColor:'#3A3C40',minWidth: '300px', position: 'sticky', top:0, left: 0, zIndex: 2 } }>{ content}</TableCell>
  )
}
