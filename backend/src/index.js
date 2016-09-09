import Koa from 'koa';
import serve from 'koa-static';
import convert from 'koa-convert';
import Waterline from 'waterline';

import * as seeds from 'src/seeds';
import config from 'src/config';
import * as bookService from 'src/services/book';
import collections from 'src/models';
import controller from 'src/controllers';
import views from 'src/views';

// Configure Koa
const app = new Koa();
app.use(views);
app.use(convert(serve(__dirname + '/public')));
app.use(controller.routes());

// Load collections into waterline
const orm = new Waterline();
collections.forEach(model => orm.loadCollection(model));

// Bootstrap the application
orm.initialize(config.db, async function(err, models) {
  if (err) throw err;

  app.context.models = models.collections;

  const { book: bookModel } = models.collections;

  try {
    // Since this is a demo app, we reset the database on every load
    await bookService.deleteAllBooks(bookModel);
    await bookService.createBooks(bookModel, seeds.books);

    app.listen(8080);
    console.log("Server started in port 8080");
  } catch (e) {
    console.log(e);
  }
});
