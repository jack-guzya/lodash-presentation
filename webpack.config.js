const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './app.js'],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4500,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets'),
        to: path.resolve(__dirname, 'dist/assets'),
      },
      {
        from: path.resolve(__dirname, 'node_modules/reveal.js/plugin'),
        to: path.resolve(__dirname, 'dist/plugin'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
  devtool: 'module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: require.resolve('reveal.js'),
        use: {
          loader: 'expose-loader',
          options: 'Reveal',
        },
      },
    ],
  },
};
