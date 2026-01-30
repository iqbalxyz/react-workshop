import { Box, Card, CardContent, TextField, Button } from '@mui/material';
function TodoForms(): JSX.Element {
    return(
        <Card sx={{ width: '100%', mt:2 }}>
        <CardContent>
          <Box 
            component="form" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              width: '100%'
            }}
          >
            <TextField 
              fullWidth 
              label="What needs to be done?" 
              variant="outlined" 
              size="small"
            />
            <Button 
              variant="contained" 
              sx={{ height: '40px', whiteSpace: 'nowrap' }}
            >
              + Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
}

export default TodoForms;