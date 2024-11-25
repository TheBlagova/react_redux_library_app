import * as actionTypes from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payLoad];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payLoad);
    default:
      return state;
  }
};

export default booksReducer;
