var webpack = require('webpack');
var sprite = require('sprite-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }, {
      test: /\.scss$/,
      loader: "style!css!sass?includePaths[]=" + bourbon
    },{
      test: /\.png$/,
      loader: "url-loader",
      query: { mimetype: "image/png" }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new sprite({
      'source': __dirname + '/sprites/tile/',
      'imgPath': __dirname + '/src/images/',
      'cssPath': __dirname + '/sass/',
      'prefix': 'tile',
      'processor': 'scss',
      'spriteName': 'sprite-tile'
    })
  ]
};
