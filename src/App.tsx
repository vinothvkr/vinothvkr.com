import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Box sx={{height: '100vh'}}>
      <Container sx={{height: 'inherit'}}>
        <Stack sx={{height: 'inherit'}} justifyContent='center' alignItems='center' spacing={3}>
          <Avatar alt='Vinoth Kumar Rajendran' src='/avatar.jpg' sx={{width: 200, height:200}} />
          <Typography variant='h3' component='h1' color="#1A2027">
            Vinoth Kumar Rajendran
          </Typography> 
        </Stack>  
      </Container>      
    </Box>
  );
}

export default App;
