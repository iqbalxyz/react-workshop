import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
  // Load todos from localStorage or use empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Get filtered todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  // Calculate count of active (incomplete) todos
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo App</h1>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={getFilteredTodos()}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          activeTodosCount={activeTodosCount}
          onClearCompleted={clearCompleted}
          hasCompleted={todos.some((todo) => todo.completed)}
        />
      </div>
    </div>
  );
}

export default App;