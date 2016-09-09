import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const slice = (s, n) => `${s.slice(0, n)}...`;

const BookCard = ({ book }) => (
  <div className="book-card">
    <img
      className="book-card__image"
      role="presentation"
      src={book.thumbnail}
    />
    <div className="book-card__information">
      <div className="book-card__title">
        {slice(book.title, 15)}
      </div>
      <p className="book-card__author">
        {slice(book.author, 25)}
      </p>
    </div>
  </div>
);

const BookLi = ({ onClick, children }) => (
  <li className="book-list__item" onClick={onClick}>
    {children}
  </li>
);

const BookUl = ({ children }) => (
  <ul className="book-list">
    { children }
  </ul>
);

const bookFilter = (fields, str) => book => (
  fields
    .map(field => book[field])
    .map(value => value.toLowerCase().includes(str))
    .reduce((acc, curr) => (acc || curr), false)
);

const BookPanel = ({ books, input }) => (
  <BookUl>
    {books
      .filter(bookFilter(['author', 'isbn', 'title', 'publisher'], input))
      .map((book, i) => (
        <BookLi key={i}>
          <Link to={`/books/${book.id}`}>
            <BookCard book={book} />
          </Link>
        </BookLi>
       ))}
  </BookUl>
);

const stateToProps = state => ({
  input: state.searchInput,
  books: state.books,
});

export default connect(stateToProps)(BookPanel);
