import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';
import { clearCompleted } from '../redux/todosSlice';

function TodoFilters() {
  const filter = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const hasCompleted = todos.some((todo) => todo.completed);

  return (
    <div className="todo-filters">
      <span className="todo-count">
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('active'))}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed
        </button>
      </div>

      <button
        className="clear-completed-btn"
        onClick={() => dispatch(clearCompleted())}
        disabled={!hasCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilters;
