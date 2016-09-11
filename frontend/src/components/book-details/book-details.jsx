import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from 'app/components/common/buttons';
import { deleteBook } from 'app/actions/book';

const Thumbnail = ({ src }) => (
  <div className="book-details__thumbnail">
    <img
      className="book-details__image"
      role="presentation" src={src}
    />
  </div>
);

const Title = ({ title }) => (
  <div className="book-details__title">
    {title}
  </div>
);

const Author = ({ author }) => (
  <div className="book-details__author">
    written by {author}
  </div>
);

const Publisher = ({ publisher }) => (
  <div className="book-details__publisher">
    published by {publisher}
  </div>
);

const Description = ({ description }) => (
  <div className="book-details__description">
    <p>{description}</p>
  </div>
);

const BookInformation = ({ children }) => (
  <div className="book-details__information">
    {children}
  </div>
);

const DeleteBookButton = ({ onClick }) => (
  <Button className="bd__panel__button delete-button" onClick={onClick}>
    Delete book
  </Button>
);

const EditBookButton = ({ onClick }) => (
  <Button className="bd__panel__button edit-button" onClick={onClick}>
    Edit book
  </Button>
);

const BookDetails = ({ router, book, deleteBook }) => (
  <div className="book-details">
    <div className="book-details__panel">
      <Thumbnail src={book.thumbnail} />
      <EditBookButton onClick={() => router.push(`/books/${book.id}/edit`)} />
      <DeleteBookButton onClick={() => deleteBook(book.id, router)} />
    </div>
    <BookInformation>
      <Title title={book.title} />
      <Author author={book.author} />
      <Publisher publisher={book.publisher} />
      <Description description={book.description} />
    </BookInformation>
  </div>
);

const stateToProps = () => ({});
const dispatchToProps = d => bindActionCreators({ deleteBook }, d);

export default withRouter(connect(stateToProps, dispatchToProps)(BookDetails));
