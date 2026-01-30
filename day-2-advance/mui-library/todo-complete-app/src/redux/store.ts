import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filtersReducer from './filtersSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
