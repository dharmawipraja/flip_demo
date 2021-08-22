import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortMethod: ''
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sort: (state, action) => {
      const { sortMethod } = action.payload;
      return { sortMethod };
    }
  }
});

export const { sort } = sortSlice.actions;

export default sortSlice.reducer;
