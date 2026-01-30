function TodoFilters({ filter, setFilter, activeTodosCount, onClearCompleted, hasCompleted }) {
  return (
    <div className="todo-filters">
      <span className="todo-count">
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <button
        className="clear-completed-btn"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilters;
