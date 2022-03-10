const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  namedModules: true,
  noEmitOnErrors: true,
  concatenateModules: true,
  minimizer: [
    new TerserPlugin({
      sourceMap: false,
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};
