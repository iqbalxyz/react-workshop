import { Box, Container } from '@mui/material';
import TodoAppBar from './components/TodoAppBar';
import TodoCard from './components/TodoCard';
import TodoForms from './components/TodoForms';
import TodoToggle from './components/TodoToggle';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { deleteTodo, toggleTodo } from './redux/todosSlice';

function App(): JSX.Element {
  // Local state for filter
  const [alignment, setAlignment] = useState<FilterValue>('all');
  
  // Redux state
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  
  // Calculate counts for the cards
  const totalCount = todos.length;
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;
  
  // Filter todos based on alignment (filter value)
  const filteredTodos = todos.filter((todo) => {
    if (alignment === 'active') return !todo.completed;
    if (alignment === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: FilterValue) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  // Event handlers for todo actions
  const handleToggle = (id: number): void => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>

        {/* Component AppBar */}
        <TodoAppBar />

        {/* Component Cards */}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <TodoCard 
            Icon={AssignmentIcon} 
            countValue={totalCount} 
            label="Total" 
            iconColor="#0d6efd"
          />
          <TodoCard 
            Icon={PendingIcon} 
            countValue={activeCount} 
            label="Active" 
            iconColor="#ff5f15"
          />
          <TodoCard 
            Icon={CheckCircleIcon} 
            countValue={completedCount} 
            label="Completed"
            iconColor="#198754"
          />
        </Box>

        {/* Component Forms */}
        <Box sx={{ mt: 2 }}>
          <TodoForms />
        </Box>

        {/* Component Toggle */}
        <Box sx={{ mt: 2 }}>
          <TodoToggle
            totalCount={totalCount}
            activeCount={activeCount}
            completedCount={completedCount}
            alignment={alignment}
            handleAlignment={handleAlignment}
          />
        </Box>
        
        {/* Component List - Now with props */}
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        {/* Component Footer */}
        <TodoFooter />

      </Container>
    </>
  );
}

export type FilterValue = 'all' | 'active' | 'completed';

export default App;