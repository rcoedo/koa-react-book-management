import React from 'react';
import getBook from 'app/selectors';
import NotFound from 'app/components/common/not-found';
import { connect } from 'react-redux';

const BookEditPage = () => (
  <div>Book Edit</div>
);

const MaybeBookEditPage = ({ book }) => (
  book ? <BookEditPage book={book} /> : <NotFound />
);


const stateToProps = (state, { params }) => ({ book: getBook(state, params.bookId) });

export default connect(stateToProps)(MaybeBookEditPage);
