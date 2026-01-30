import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../types';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: 'all' as FilterType,
  reducers: {
    setFilter: (_state, action: PayloadAction<FilterType>) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
