import { configureStore } from '@reduxjs/toolkit';

import transactionReducer from './Transactions.slice';
import searchReducer from './Search.slice';
import sortReducer from './Sort.slice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    search: searchReducer,
    sort: sortReducer
  }
});
