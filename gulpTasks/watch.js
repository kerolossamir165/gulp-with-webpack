let gulp = require("gulp");
let watch = require("gulp-watch");
let browserSync = require("browser-sync").create();

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "",
      notify: false,
    },
  });

  watch("./**/*.css", function () {
    gulp.start("cssInject");
  });

  watch("./**/*.js", function () {
    gulp.start("refresh");
  });
});

gulp.task("cssInject", ["styles"], function () {
  return gulp.src("./**/*.css").pipe(browserSync.stream());
});

gulp.task("refresh", ["scripts"], function () {
  browserSync.reload();
});
