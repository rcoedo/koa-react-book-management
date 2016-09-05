var path = require("path");
var webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "app": path.join(__dirname, "./src")
    }
  },

  entry: [
    "./src/index.jsx"
  ],

  output: {
    path: path.join(__dirname, "./"),
    filename: "main.bundle.js"
  },

  plugins: [],

  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {id: "js", test: /\.jsx?$/, loaders: ["babel"], exclude: /node_modules/}
    ]
  }
};
