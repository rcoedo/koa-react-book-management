import React from 'react';
import { connect } from 'react-redux';
import getBook from 'app/selectors';
import NotFound from 'app/components/common/not-found';
import BookDetails from 'app/components/book-details/book-details';
import { BackButton, AddButton } from 'app/components/common/buttons';

const BookDetailsPage = ({ book }) => (
  <div className="book-details-page">
    <BackButton to="/" />
    <BookDetails book={book} />
    <AddButton />
  </div>
);

const MaybeBookDetailsPage = ({ book }) => (
  book ? <BookDetailsPage book={book} /> : <NotFound />
);

const stateToProps = (state, { params }) => ({ book: getBook(state, params.bookId) });

export default connect(stateToProps)(MaybeBookDetailsPage);
