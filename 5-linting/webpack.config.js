const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader?presets[]=es2015" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
};

module.exports = config;
