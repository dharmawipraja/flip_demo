import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      const { query } = action.payload;
      return { query };
    }
  }
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
