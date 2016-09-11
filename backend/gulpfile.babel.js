import gulp from "gulp";
import clean from "gulp-clean";
import babel from "gulp-babel";
import nodemon from "gulp-nodemon";
import watch from "gulp-watch";
import plumber from "gulp-plumber";
import mocha from "gulp-mocha";

const test = "test";
const source = "src";
const target = "lib";
const entrypoint = `${target}/index.js`;

gulp.task("test", () => {
  gulp.src(`${test}/**/*.js`)
    .pipe(babel())
    .pipe(mocha());
});

gulp.task("templates", () => {
  gulp.src(`${source}/**/*.ejs`)
    .pipe(gulp.dest(target))
});

gulp.task("compile", ["templates"], () => {
  gulp.src(`${source}/**/*.js`)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(target))
});

gulp.task("run", ["compile"], () => nodemon({ script: entrypoint }));

gulp.task("dev", () => {
  watch(`${source}/**/*.js`, () => gulp.start("compile"));
  gulp.start("run");
});
