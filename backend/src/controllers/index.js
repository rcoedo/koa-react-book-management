import KoaRouter from 'koa-router';
import api from 'src/controllers/api';
import config from 'src/config';

const index = new KoaRouter();
index.use(api.routes());
index.get('*', ctx => ctx.render('layout', config));

export default index;
