import * as actionTypes from './actionTypes';

export const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payLoad: newBook,
  };
};

export const deleteBook = (id) => {
  return {
    type: actionTypes.DELETE_BOOK,
    payLoad: id,
  };
};
