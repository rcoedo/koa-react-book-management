/*eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { promiseActionMiddleware, versionMiddleware } from "fredux";

export default function configureStore(reducer, initialState) {
  const store = createStore(reducer, initialState,
      compose(applyMiddleware(promiseActionMiddleware, versionMiddleware),
              window.devToolsExtension ? window.devToolsExtension() : f => f));

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
