import React from 'react';
import { Router, Route } from 'react-router';
import SearchPage from 'app/components/search/search-page';
import BookDetailsPage from 'app/components/book-details/book-details-page';
import BookEditPage from 'app/components/book-edit/book-edit-page';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={SearchPage} />
    <Route path="/books/:bookId" component={BookDetailsPage} />
    <Route path="/books/:bookId/edit" component={BookEditPage} />
  </Router>
);

export default Routes;
