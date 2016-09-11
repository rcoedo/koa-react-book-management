import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { BackButton } from 'app/components/common/buttons';
import getBook from 'app/selectors';
import NotFound from 'app/components/common/not-found';
import { updateBook } from 'app/actions/book';

const TextField = ({ name, children, value }) => (
  <div>
    <label className="book-edit__label" htmlFor={name}>
      {children}
    </label>
    <Field
      className="book-edit__field"
      name={name}
      value={value}
      component="input"
      type="text"
    />
  </div>
);

const InternalBookEditForm = ({ router, updateBook, handleSubmit,
                                pristine, reset, submitting, book }) => (
  <form
    className="book-edit__form"
    onSubmit={handleSubmit(form => updateBook({ ...form, id: book.id }, router))}
  >
    <TextField name="title">Title</TextField>
    <TextField name="isbn">Isbn</TextField>
    <TextField name="author">Author</TextField>
    <TextField name="publisher">Publisher</TextField>
    <TextField name="thumbnail">Thumbnail url</TextField>
    <TextField name="description">description</TextField>
    <button type="submit" disabled={pristine || submitting}>
      Update
    </button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear
    </button>
  </form>
);

const bookEditFormStp = (state, ownProps) => ({ initialValues: { ...ownProps.book } });
const bookEditFormDtp = d => bindActionCreators({ updateBook }, d);
const BookEditForm = compose(
  connect(bookEditFormStp, bookEditFormDtp),
  reduxForm({ form: 'book-edit' }),
  withRouter
)(InternalBookEditForm);

const BookEditPage = ({ book }) => (
  <div className="book-edit-page">
    <BackButton to={`/books/${book.id}`} />
    <BookEditForm book={book} />
  </div>
);

const MaybeBookEditPage = ({ book }) => (
  book ? <BookEditPage book={book} /> : <NotFound />
);


const stateToProps = (state, { params }) => ({ book: getBook(state, params.bookId) });

export default connect(stateToProps)(MaybeBookEditPage);
