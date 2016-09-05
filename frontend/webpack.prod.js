var Webpack = require("webpack");
var config = require("./webpack.base.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.plugins.push(new ExtractTextPlugin("application.css"));
config.module.loaders.push({test: /\.s?css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")});
config.plugins.push(new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
config.plugins.push(new Webpack.DefinePlugin({"process.env": { "NODE_ENV" : "\'production\'"}}));

module.exports = config;
