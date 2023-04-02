import { useContext, } from 'react'
import { Dialog, IconButton } from '@mui/material'
import { UIContext } from '../context/Ui/UiContext'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { ProgramDetails } from './ProgramDetails';
import { ProgramTable } from './ProgramTable';

export const EPGModal = () =>
{
  const { isModalOpen, toggleModal } = useContext(UIContext);



  return (
    <Box>
      <Dialog
        open={ isModalOpen }
        transitionDuration={ 800 }
        fullScreen
       sx={ { backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out', maxWidth:'100vw'} }
      >
        <IconButton aria-label='close modal' onClick={ toggleModal } sx={ { position: 'absolute', top: 8, right: 8, backgroundColor:'gray', display: isModalOpen ? 'flex' : 'none', zIndex: 1, color:'black' } }  >
          <CloseIcon />
        </IconButton>
        <Box sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' } } >
              <ProgramDetails />
              <ProgramTable />
        </Box>
      </Dialog>
    </Box>
  )
}
