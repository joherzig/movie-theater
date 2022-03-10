const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const hash = require('string-hash');
const { relative } = require('path');

module.exports = rootDir => ({
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: [/node_modules/, path.resolve(rootDir, './src/legacy')], //eslint-disable-line
    },
    {
      test: /\.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ({ resource }) => ({
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeViewBox: false },
              {
                cleanupIDs: {
                  prefix: `svg${hash(relative(rootDir, resource))}`,
                },
              },
            ],
          },
        },
      }),
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: /node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      ],
    },
  ],
});
