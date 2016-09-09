import KoaRouter from 'koa-router';
import { getBooks } from 'src/services/book';
import models from 'src/models';

const api = new KoaRouter().prefix('/api');
api.get('/books', async function(ctx) {
  ctx.body = {
    books: await getBooks(ctx.models.book)
  };
});

export default api;
