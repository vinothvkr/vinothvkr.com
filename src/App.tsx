import { Avatar, Box, Container, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

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
          <Stack direction='row' spacing={1}>
            <IconButton href='https://github.com/vinothvkr' target='_blank'>
              <GitHubIcon />
            </IconButton>
            <IconButton href='https://twitter.com/_vinothvkr' target='_blank'>
              <TwitterIcon sx={{color: '#1da1f2'}}/>
            </IconButton>
          </Stack>
        </Stack>  
      </Container>      
    </Box>
  );
}

export default App;
