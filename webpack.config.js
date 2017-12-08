var path = require('path');
var webpack = require('webpack');

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
               loader:"style-loader!css-loader!sass-loader"
             },

             {
               test:/\.css$/,
               loader:"style-loader!css-loader"
             }

         ]
     }

}
