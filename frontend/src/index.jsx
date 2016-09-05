/* eslint-env browser */
import 'app/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
// import reducer from 'app/reducers';
// import configureStore from 'app/config/configure-store';
// import { Router, Route } from 'react-router';

// const scenario = Scenarios[props.scenario];

// const Root = ({ store, page: Page, children, history }) => (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path='/' component={SearchPage} />
//     </Router>
//   </Provider>
// );

const Root = () => (
  <div>hello, world!</div>
);

// render(<Root store={configureStore(reducer)} />, document.getElementById('content'));
render(<Root />, document.getElementById('content'));
