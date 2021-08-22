import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

export const transactionsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTransactions: (state, action) => {
      return {
        list: [...state.list, ...action.payload.transactions]
      };
    }
  }
});

export const { addTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
