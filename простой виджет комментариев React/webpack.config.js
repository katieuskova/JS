let path = require('path');

let config = {
   entry: './src/index.js',
   output: {
     path: path.resolve (__dirname, './dist'),
     filename: 'main.js',
     publicPath: './dist'
   },
   module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        } 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
  };
  
module.exports = config