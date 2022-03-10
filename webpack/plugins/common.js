const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (config, env, rootDir) => [
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(env),
  }),
  new HtmlWebpackPlugin({
    title: "shirt",
    hash: true,
    cache: true,
    template: path.resolve(rootDir, "./src/index.html"),
    showErrors: true,
  }),
];
