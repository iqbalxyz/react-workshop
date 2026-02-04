import { Box, List, Paper, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../types';
import InboxIcon from '@mui/icons-material/Inbox';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onToggle, onDelete }: TodoListProps): JSX.Element {
  if (todos.length === 0) {
    return (
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary" sx={{color: '#616161', fontWeight: 600}}>
          <Box sx={{ color: '#bdbdbd', mb: 2 }}>
            <InboxIcon sx={{ fontSize: 60 }} />
          </Box>
          No todos found
        </Typography>
        <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
          Add a new todo to get started!
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;