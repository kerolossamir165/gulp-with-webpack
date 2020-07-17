/****using post css */
let gulp = require("gulp");
let postcss = require("gulp-postcss");
let vars = require("postcss-simple-vars");
let nested = require("postcss-nested");
let mixin = require("postcss-mixins");
let autoprefix = require("autoprefixer");
let hexrgba = require("postcss-hexrgba");
let importCss = require("postcss-import");

gulp.task("styles", function () {
  return gulp
    .src("./**/*.css")
    .pipe(postcss([importCss, nested, vars, mixin, autoprefix, hexrgba]))
    .on("error", function (err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("dist/style"));
});
