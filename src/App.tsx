import { useContext } from 'react';
import { UIContext } from './context/Ui/UiContext';
import { Button } from '@mui/material';

import { Box } from '@mui/system';
import { EPGModal } from './components/';


function App ()
{
  const { toggleModal } = useContext(UIContext);
  return (
    <Box sx={{position:'relative', backgroundColor:'white'}} >
      <Box sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } } >
        <Button variant='contained' onClick={ toggleModal }  >Mostrar EPG</Button>
      </Box>
      <EPGModal/>
    </Box>

  );
}

export default App;
