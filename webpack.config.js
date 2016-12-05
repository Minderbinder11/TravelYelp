var webpack = require('webpack');


module.exports = {
  entry  : './app/app.jsx',

  output : {
    path    : __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root : __dirname,
    alias: {
      Main        : 'app/components/Main.jsx',
      Nav         : 'app/components/Nav.jsx',
      About       : 'app/components/About.jsx',
      Examples    : 'app/components/Examples.jsx',
      TripPlanner : 'app/components/TripPlanner.jsx',
      InputButton : 'app/components/InputButton.jsx',
      StoreTile   : 'app/components/StoreTile.jsx',
      apiOpenYelp : 'app/api/apiOpenYelp.js',
      YelpApi     : 'app/api/YelpApi.js'
    },

    extensions: ['', '.js', '.jsx']
  },

  module : {
    loaders: [
      {
        loader : 'babel-loader',
        query  : {
          presets: ['react', 'es2015']
        },
        test   : /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },

    ]
  },

  //devtool: 'cheap-module-eval-source-map'
};