const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },
    devServer: {
      hot: 'only',
      // TODO: Add the correct output
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },

      // TODO: Add the correct plugins
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Client Server',
          template: './index.html',
        })
      ],

      // TODO: Add the correct modules
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      }
    },
  }};
