import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../Data/books.json';
import './BookForm.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispath = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    const randomBookWithId = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false,
    };

    dispath(addBook(randomBookWithId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4(),
        isFavorite: false,
      };
      console.log(addBook(book));
      dispath(addBook(book));

      setTitle('');
      setAuthor('');
    }
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
        <button type="submit" onClick={handleAddRandomBook}>
          Add random
        </button>
      </form>
    </div>
  );
}

export default BookForm;
