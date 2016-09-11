import KoaRouter from 'koa-router';
import { getBooks, deleteBook, createEmptyBook } from 'src/services/book';
import models from 'src/models';

const api = new KoaRouter().prefix('/api');
api.get('/books', async function(ctx) {
  ctx.body = {
    books: await getBooks(ctx.models.book)
  };
});

api.post('/books', async function(ctx) {
  ctx.body = {
    book: await createEmptyBook(ctx.models.book)
  };
});

api.del('/books/:bookId', async function(ctx) {
  ctx.body ={
    book: await deleteBook(ctx.models.book, ctx.params.bookId)
  };
});

api.put('/books/:bookId', async function(ctx) {
});

export default api;
