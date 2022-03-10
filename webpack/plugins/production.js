const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (config, env, rootDir) => {
  const common = require('./common')(config, env, rootDir);
  return [
    ...common,
    new CleanWebpackPlugin({
      root: rootDir,
      verbose: false,
      dry: false,
    }),
    new CopyPlugin([
      {
        from: path.resolve(rootDir, './public'),
        to: path.resolve(rootDir, './dist'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ];
};
