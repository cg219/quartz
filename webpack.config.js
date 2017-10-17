const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const MainStyle = new ExtractText('./../css/[name].styles.css');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js/')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: MainStyle.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader?importLoaders=1'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    MainStyle
  ],
  externals: {
    async: 'commonjs async'
  }
}