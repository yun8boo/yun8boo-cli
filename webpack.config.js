const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {

  return ({
    entry: './src/cli.tsx',
    target: 'node',
    output: {
      path: path.resolve('./dist'),
      filename: '[name].js',
    },

    optimization: {
      minimize: true,
      minimizer: (process.env.NODE_ENV === 'production') ? [
        new TerserPlugin({
          sourceMap: false,
        }),
      ] : [],
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    // ソースマップを有効にする
    devtool: 'source-map',
  });
};
