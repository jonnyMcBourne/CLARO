import React, { useContext, useEffect } from 'react'
import { Dialog, IconButton } from '@mui/material'
import { UIContext } from '../context/Ui/UiContext'
import CloseIcon from '@mui/icons-material/Close';
import { UseProgram } from '../hooks/UseProgram';
const baseURl = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200'

export const EPGModal = () =>
{
  const { isModalOpen, toggleModal } = useContext(UIContext);

  const { data, error, isLoading } = UseProgram(baseURl);
  
  
  return (
    <Dialog open={ isModalOpen } sx={ { backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' } } >
      <IconButton aria-label='close modal' onClick={toggleModal}  >
        <CloseIcon/>
      </IconButton>
      
    </Dialog>
  )
}
