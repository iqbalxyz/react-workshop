import { Container, Box, Typography, AppBar, Toolbar } from '@mui/material';
import { toggleTodo, deleteTodo } from './redux/todosSlice';
import ThemeToggle from './components/ThemeToggle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const filter = useAppSelector((state) => state.filters);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleToggle = (id: number): void => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            My Todos
          </Typography>

          <TodoForm />

          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          <TodoFilters />
        </Box>
      </Container>
    </>
  );
}

export default App;
