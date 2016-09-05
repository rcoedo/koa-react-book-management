var Webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.base.js");

config.plugins.push(new Webpack.NoErrorsPlugin());
config.plugins.push(new Webpack.HotModuleReplacementPlugin());

config.module.loaders.push({test: /\.s?css$/, loader: "style-loader!css-loader!postcss-loader!sass-loader"});

config.entry.unshift("webpack/hot/only-dev-server");
config.entry.unshift("webpack-dev-server/client?http://localhost:4000");

config.output.publicPath = "http://localhost:4000/";

config.plugins.push(new Webpack.DefinePlugin({"process.env": { "NODE_ENV" : "\'development\'"}}));

var compiler = Webpack(config);

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false,
    colors: true
  }})
  .listen(4000, "0.0.0.0", function (err, result) {
    if (err){
      console.error(err);
    }
    console.log("webpack-dev-server running on port 4000");
  });
