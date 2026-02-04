import { Box, Card, CardContent, TextField, Button } from '@mui/material';
import { useAppDispatch } from '../redux/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addTodo } from '../redux/todosSlice';

function TodoForms(): JSX.Element {

  const [input, setInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

    return(
        <Card sx={{ width: '100%'}}>
        <CardContent>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              width: '100%',
              mt: 1,
            }}
          >
            <TextField 
              sx={{ flex: 15 }}
              fullWidth 
              label="What needs to be done?" 
              variant="outlined" 
              size="small"
              onChange={handleChange}
            />
            <Button 
              type="submit"
              variant="contained" 
              sx={{ height: '40px', whiteSpace: 'nowrap', textTransform: 'none', flex: 1 }}
            >
              + Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
}

export default TodoForms;