import { createSlice } from '@reduxjs/toolkit';
import { ThemeMode } from '../types';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light' as ThemeMode,
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
