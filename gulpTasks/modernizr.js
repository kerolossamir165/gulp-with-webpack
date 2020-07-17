let gulp = require("gulp");
let modernizr = require("gulp-modernizr");

gulp.task("modernizr", function () {
  return gulp
    .src(["./**/*.css", "./**/*.js"])
    .pipe(
      modernizr({
        options: ["setClasses"],
      })
    )
    .pipe(gulp.dest("dist/scripts"));
});
