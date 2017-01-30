var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Form Creator',
  filename: 'index.html',
  template: './src/index.html',
  inject: 'body'
})


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        include: __dirname + '/src/styles',
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}