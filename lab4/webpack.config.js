const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
    ]
  },

  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
        template: "index.html",
        inject: 'body'
    })
  ],

  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
};