/* eslint-env browser */
import 'app/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import reducer from 'app/reducers';
import configureStore from 'app/config/configure-store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from 'app/root';


window.render = initialState => {
  const store = configureStore(reducer, initialState);
  const history = syncHistoryWithStore(browserHistory, store);

  render(<Root store={store} history={history} />,
         document.getElementById('content'));
};
