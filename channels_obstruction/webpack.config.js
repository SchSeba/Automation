/**
 * Created by root on 9/11/17.
 */
// load the needed node modules
var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

// webpack project settings
module.exports = {
    devtool: "source-map",
    context: __dirname,
    entry: {
          lobby: './templates/components/lobby/index',
          game: './templates/components/game/index'
    },
    output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js"
    },

    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({path: __dirname, filename: './webpack-stats.json'})

    ],

    module: {
    loaders: [
    {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    },
    ]
    },

    resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    },
}