/**
 * Created by sunzhuoyi on 16/12/14.
 */
/**
 * Created by sherrytq on 16/8/1.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') } ,
      DEV: false,
      TEST: false,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(css)$/,
        exclude: /\.(useable|post)\.(css|less)/,
        loader: 'style!css'
      },
      {
        test: /\.(less)$/,
        exclude: /\.(useable|post)\.(css|less)/,
        loader: 'style!css!less'
      },
      {
        test: /\.post\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.useable\.(css)$/,
        loader: 'style/useable!css'
      },
      {
        test: /\.(woff|png|jpg|gif|svg)/,
        loader: "url?limit=8192&name=image/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: [ require('autoprefixer')]
};
