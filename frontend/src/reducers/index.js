import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { successType, version } from 'fredux';
import { reducer as form } from 'redux-form';
import { INPUT_CHANGE } from 'app/actions/search';
import { DELETE_BOOK, CREATE_BOOK, UPDATE_BOOK } from 'app/actions/book';

const removeBook = (books, id) => books
        .filter(book => book.id !== id);

const booksInitState = [];
function books(state = booksInitState, { type, payload }) {
  switch (type) {
    case successType(DELETE_BOOK):
      return removeBook(state, payload.bookId);
    case successType(CREATE_BOOK):
      return [...state, payload.response.book];
    case successType(UPDATE_BOOK):
      return [
        ...removeBook(state, payload.response.book.id),
        payload.response.book,
      ];
    default:
      return state;
  }
}

const searchInputInitState = '';
function searchInput(state = searchInputInitState, { type, payload: input }) {
  switch (type) {
    case INPUT_CHANGE:
      return input;
    default:
      return state;
  }
}

export default combineReducers({ searchInput, books, routing, form, version });
