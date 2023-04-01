import TableCell from '@mui/material/TableCell';
import { FC } from 'react';
interface Props
{
    content:string
}

export const StickyCell:FC<Props> = ({content}) =>
{
  return (
      <TableCell sx={ { backgroundColor:'#3A3C40',minWidth: '300px', position: 'sticky', left: 0, zIndex: 1 } }>{ content}</TableCell>
  )
}
