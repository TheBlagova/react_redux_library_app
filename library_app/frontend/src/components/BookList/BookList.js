import { useSelector } from 'react-redux';
import './BookList.css';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
