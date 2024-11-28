import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.filter((book) => book.id !== action.payLoad);
    },
    toggleFavorite: (state, action) => {
      return state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkfunction = async (dispath, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book');

    if (res.data && res.data.title && res.data.author) {
      dispath(addBook(createBookWithId(res.data, 'API')));
    }
  } catch (error) {
    console.log('Error fetching random book', error);
  }
};

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
