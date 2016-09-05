import KoaRouter from 'koa-router';

const api = new KoaRouter().prefix('/api');
api.get('/what', ctx => {
  ctx.body = 'what what';
});

export default api;
