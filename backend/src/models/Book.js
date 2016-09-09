import Waterline from 'waterline';

const bookCollection = Waterline.Collection.extend({
  identity: 'book',
  connection: 'default',
  attributes: {
    title: 'string',
    isbn: 'string',
    author: 'string',
    publisher: 'string',
    thumbnail: 'string',
    description: 'string'
  }
});

export default bookCollection;
