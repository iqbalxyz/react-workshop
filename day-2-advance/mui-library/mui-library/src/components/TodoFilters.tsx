import { Box, Chip, Button, Typography } from '@mui/material';
import { setFilter } from '../redux/filtersSlice';
import { clearCompleted } from '../redux/todosSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { FilterType } from '../types';

function TodoFilters(): JSX.Element {
  const filter = useAppSelector((state) => state.filters);
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const hasCompleted = todos.some((todo) => todo.completed);

  const handleFilterChange = (newFilter: FilterType): void => {
    dispatch(setFilter(newFilter));
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip
          label="All"
          onClick={() => handleFilterChange('all')}
          color={filter === 'all' ? 'primary' : 'default'}
          variant={filter === 'all' ? 'filled' : 'outlined'}
        />
        <Chip
          label="Active"
          onClick={() => handleFilterChange('active')}
          color={filter === 'active' ? 'primary' : 'default'}
          variant={filter === 'active' ? 'filled' : 'outlined'}
        />
        <Chip
          label="Completed"
          onClick={() => handleFilterChange('completed')}
          color={filter === 'completed' ? 'primary' : 'default'}
          variant={filter === 'completed' ? 'filled' : 'outlined'}
        />
      </Box>

      <Button
        size="small"
        onClick={() => dispatch(clearCompleted())}
        disabled={!hasCompleted}
      >
        Clear Completed
      </Button>
    </Box>
  );
}

export default TodoFilters;
