import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';


function TodoAppBar(): JSX.Element {
    return(
        <AppBar position="static" sx={{borderRadius: 1}}>
          <Toolbar sx={{ minHeight: '80px', '@media (min-width:600px)': { minHeight: '100px' } }}>
            <Box mr={2}>
              <ChecklistIcon fontSize="large"/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" component="div">
                Todo Complete App
              </Typography>
              <Typography variant="caption" component="div">
                Your comprehensive management solution
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
    );
}

export default TodoAppBar;