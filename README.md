## node library

This is a very basic book CRUD SPA application done in koa2 + react + redux + mongodb. The application comes with a
dockerized dev environment and a small Dockerfile to build an image with the whole thing for production.

### Architecture

The application is divided in two different projects: frontend and backend. Each one has its own dependencies and build
cycle, but they are orchestrated through docker-compose to run in development.

The backend runs on port 8080. In development the assets are served by webpack server, which runs in port 4000 (serves both js and css). This gives the developer hot reload capabilities.

In production, the frontend is bundled in a single js file and a single css file which are served by the backend.

### Running the tests
Just `make test` in the project root.

### Running in local

To run the application in local you need to have docker installed, then run the following commands

1. `make install` to install both backend and frontend dependencies.
2. `make dev` to launch koa and webpack server.

### Packaging & deploying the application

The app is configured to run in aws using ECS and EC2. To deploy the application run:

1. `make package` packages the whole thing and creates a docker image.
2. `make deploy` pushes the image to ECS and launches the container.

### Frontend

* The frontend is written using es6 and the latests versions of react and redux.
* For the update book form I'm using redux-forms.
* All the code is linted, following most of AirBnB js conventions.
* For the asynchronous calls I'm using [fredux](https://github.com/trabe/fredux), a small set of middleware utils that I've done in my current job. It features a middleware capable of executing promises and launching standard actions based on the result of the execution (REQUEST, FAILURE, SUCCESS).
* The styles are written in sass and autoprefixed.
* Part of the layouting was done using flexbox.
* The styles are organized using a combination of the ITCSS and BEM css models.

### Backend

* The backend is written using es6 and the async/await syntax.
* The backend is compiled and run using babel and gulp.
* For the web server I'm using koa2.
* The templates (there is only one template used for the layout) is written in ejs.
* The ORM is sails and the database is mongo.
* The backend follows a layered architecture (MVC). I also use a service layer in the model to decouple the controllers from waterline.

### Missing things (didn't make it in time!)

* Only the service layer is tested, and the tests are poor.
* Error handling is non-existent.
* The frontend could use a couple of spinners to give the user feedback about loading things.
* The styling could be improved.
