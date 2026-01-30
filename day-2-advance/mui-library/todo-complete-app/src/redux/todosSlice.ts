import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types';

// Load initial state from localStorage
const loadState = (): Todo[] => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState) as Todo[];
  } catch (err) {
    return [];
  }
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: loadState(),
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.push(newTodo);
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        // Save to localStorage
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    clearCompleted: (state) => {
      const newState = state.filter((todo) => !todo.completed);
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
