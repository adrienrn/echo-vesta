const ExtractTextPlugin = require('mini-css-extract-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015'],
        },
      },
      {
        test: /\.scss|\.css$/,
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [
    // webpack.
    new ExtractTextPlugin({
      chunkFilename: "[id].css",
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: true,
  },
};
