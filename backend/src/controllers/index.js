import KoaRouter from 'koa-router';
import api from 'src/controllers/api';
import config from 'src/config';
import { getBooks } from 'src/services/book';

const index = new KoaRouter();
index.use(api.routes());
index.get('*', async function(ctx) {
  return ctx.render('layout', {
    config,
    initialState: {
      books: await getBooks(ctx.models.book)
    }
  });
});

export default index;
