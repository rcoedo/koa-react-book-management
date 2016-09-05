import Koa from 'koa';
import serve from 'koa-static';
import convert from 'koa-convert';
import controller from 'src/controllers';
import views from 'src/views';

const app = new Koa();
app.use(views);
app.use(convert(serve(__dirname + '/public')));
app.use(controller.routes());

app.listen(8080);
