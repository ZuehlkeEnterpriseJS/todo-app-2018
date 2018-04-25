const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'development', 
  entry: {
    app: "./src/index.ts"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo App",
      template: "index.html",
      alwaysWriteToDisk: true
    }),
    new CleanWebpackPlugin(["dist"])
  ],
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
};
