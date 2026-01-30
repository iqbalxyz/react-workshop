import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';
import TodoItem from './TodoItem';

function TodoList({ data }) {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  if (filteredTodos.length === 0) {
    return <div className="todo-list-empty">No todos yet. Add one above!</div>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => dispatch(toggleTodo(todo.id))}
          onDelete={() => dispatch(deleteTodo(todo.id))}
        />
      ))}
    </ul>
  );
}

export default TodoList;
