import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { INPUT_CHANGE } from 'app/actions/search';

const booksInitState = [];
function books(state = booksInitState) {
  return state;
}

const searchInputInitState = '';
function searchInput(state = searchInputInitState, { type, payload }) {
  switch (type) {
    case INPUT_CHANGE:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({ searchInput, books, routing });
