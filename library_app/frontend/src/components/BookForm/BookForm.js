import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import booksData from '../../Data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispath = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispath(addBook(createBookWithId(randomBook, 'random')));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispath(addBook(createBookWithId({ title, author }, 'manual')));

      setTitle('');
      setAuthor('');
    } else {
      dispath(setError('You must fill title and author'));
    }
  };

  const handleAddRandomBookViaAPI = () => {
    dispath(fetchBook('http://localhost:4000/random-book-delayed'));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random
        </button>

        <button
          type="button"
          onClick={handleAddRandomBookViaAPI}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Loading book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add random via API'
          )}
        </button>
      </form>
    </div>
  );
}

export default BookForm;
