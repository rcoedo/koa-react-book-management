import React from 'react';
import { Router, Route } from 'react-router';
import SearchPage from 'app/pages/search';
import BookDetailsPage from 'app/pages/book-details';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={SearchPage} />
    <Route path="/books/:bookId" component={BookDetailsPage} />
  </Router>
);

export default Routes;
