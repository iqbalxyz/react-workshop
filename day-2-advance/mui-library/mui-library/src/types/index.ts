// Todo item interface
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

// Filter types
export type FilterType = 'all' | 'active' | 'completed';

// Theme types
export type ThemeMode = 'light' | 'dark';
