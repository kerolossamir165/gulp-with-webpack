let path = require("path");

module.exports = {
  entry: {
    App: "./**/*.js",
    Vandors: "./scripts/Vendors.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        lader: "bebel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
