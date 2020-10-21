const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // https://github.com/webpack/webpack-dev-server/issues/2758
  // TODO remove when fixed
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
          {
            loader: 'ts-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    modules: [path.resolve('./node_modules'), path.resolve('./')],
    mainFields: ['browser', 'module', 'main'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/index.html', to: 'index.html' }],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: 'Google Chrome',
    hot: true,
  },
}

module.exports = config
