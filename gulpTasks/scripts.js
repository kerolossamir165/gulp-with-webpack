let gulp = require("gulp");
let webpack = require("webpack");

gulp.task("scripts", ["modernizr"], function () {
  return gulp.src("./**/*.js").pipe(
    webpack(require("../webpack.config"), function (err, stat) {
      if (stat) {
        console.log(stat.toString());
      } else {
        console.log(err);
      }
    })
  );
});
