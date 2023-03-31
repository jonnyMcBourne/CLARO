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
        transitionDuration={ 700 }
        /*
        PaperProps={ {
          sx: {
            width: "100vw",
            height: "100%",
            backgroundColor: "red",
            boxShadow: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
      } }
      */
        fullScreen
       sx={ { backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out'} }
      >
        <IconButton aria-label='close modal' onClick={ toggleModal } sx={ { position: 'absolute', top: 8, right: 8, backgroundColor:'white', display: isModalOpen ? 'flex' : 'none', zIndex: 1 } }  >
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
