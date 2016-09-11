import React from 'react';
import Input from 'app/components/search/input';
import BookPanel from 'app/components/search/book-panel';
import { AddButton } from 'app/components/common/buttons';

const SearchPage = () => (
  <div>
    <Input />
    <BookPanel />
    <AddButton />
  </div>
);

export default SearchPage;
