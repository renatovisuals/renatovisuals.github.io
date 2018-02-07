var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:'./app/assets/scripts/app.js',
  output:{
    path:path.resolve(__dirname,'./app/temp'),
    filename:'bundle.js'
  },

  watch:true,

module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },

             {
               test:/\.scss$/,
               use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use: ["css-loader","sass-loader"]
               })
             },

             {
               test:/\.css$/,
               loader:"style-loader!css-loader"
             },
             {
               test: /\.(png|jpg)$/,
               loader: 'url-loader'
}

         ]
     },
     plugins:[
       new ExtractTextPlugin("styles.css"),
     ]

}
