/*eslint-disable */
import { createStore } from 'redux';

export default function configureStore(reducer, initialState) {
  const store = createStore(reducer, initialState,
      window.devToolsExtension ? window.devToolsExtension() : f => f);

  return store;
}
