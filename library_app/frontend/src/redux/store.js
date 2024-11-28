import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksReducer from './slices/booksSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
