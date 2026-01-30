import { useState, FormEvent, ChangeEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addTodo } from '../redux/todosSlice';
import { useAppDispatch } from '../redux/hooks';

function TodoForm(): JSX.Element {
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

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleChange}
          autoFocus
        />

        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ minWidth: 100 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default TodoForm;
