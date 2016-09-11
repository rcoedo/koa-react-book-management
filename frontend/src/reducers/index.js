import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { successType, version } from 'fredux';
import { INPUT_CHANGE } from 'app/actions/search';
import { DELETE_BOOK, CREATE_BOOK } from 'app/actions/book';

const booksInitState = [];
function books(state = booksInitState, { type, payload }) {
  switch (type) {
    case successType(DELETE_BOOK):
      return state.filter(book => book.id !== payload.bookId);
    case successType(CREATE_BOOK):
      return [...state, payload.response.book];
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

export default combineReducers({ searchInput, books, routing, version });
