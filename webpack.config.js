// Webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    ministry: './src/ministry/ministry.js',
    checkbox: './src/checkbox/checkbox.js',
    map: './src/map/map.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [

      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: '[name].css' }
    ),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/checkbox/checkbox.html',
      filename: 'checkbox.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/map/map.html',
      filename: 'map.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/ministry/ministry.html',
      filename: 'ministry.html'
    })
  ]
};