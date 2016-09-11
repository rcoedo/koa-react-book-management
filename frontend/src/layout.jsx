import React from 'react';
import { Provider } from 'react-redux';

const Layout = ({ store, children }) => (
  <Provider store={store}>
    <div>
      <header className="site-header">
        Node Library
      </header>
      <main className="wrapper" role="main">
        {children}
      </main>
    </div>
  </Provider>
);

export default Layout;
