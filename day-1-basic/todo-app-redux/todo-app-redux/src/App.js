import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
  // No local state needed!
  // All state is managed by Redux

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo App with Redux</h1>
        <TodoForm />
        <TodoList />
        <TodoFilters />
      </div>
    </div>
  );
}

export default App;
