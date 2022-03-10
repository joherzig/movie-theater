const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (config, env, rootDir) => {
  const common = require('./common')(config, env, rootDir);
  const devPlugins = [
    ...common,
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CleanWebpackPlugin({ verbose: true, dry: false, root: rootDir }),
  ];
  return devPlugins;
};
