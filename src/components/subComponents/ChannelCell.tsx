import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { cellheigh, columnChannelWidth } from '../../utils'

interface Props
{
    image: string
    number: string
    name: string
}

export const ChannelCell: FC<Props> = ({ image, name, number }) =>
{
    return (
        <Box sx={ {
            display: 'flex',
            width:columnChannelWidth,
            minWidth: columnChannelWidth,
            position: 'sticky',
            zIndex:3,
            backgroundColor:'black',
            left: 0,
            height: cellheigh,
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)'
        } }>
            <Box sx={ {
                height:  "5.7em" ,
                backgroundColor: '#3A3C40',
                margin: '5px',
                width: '95%',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center'
            } }>
                <Typography variant='h3' sx={{paddingLeft:'10%',width:'30%'}}>{ number }</Typography>
                <img src={ image } alt={ name } style={{ width:'70%'}} />
            </Box>

        </Box>
    )
};
