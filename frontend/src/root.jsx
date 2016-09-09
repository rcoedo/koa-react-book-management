import React from 'react';
import Routes from 'app/routes';
import Layout from 'app/layout';

const Root = ({ store, history }) => (
  <Layout store={store}>
    <Routes history={history} />
  </Layout>
);

export default Root;
