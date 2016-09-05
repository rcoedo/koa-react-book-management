import views from 'koa-views';

const templates = views(__dirname, { extension: 'ejs' });

export default templates
