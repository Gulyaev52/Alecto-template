const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: `./src/pages/index.jsx`,

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel',
                include: [
                    path.join(__dirname, 'src')
                ],
                query: { presets: ['latest', 'react'] },
            },
            { 
                test: /\.pug$/, 
                loader: 'pug' 
            },
            { 
                test: /\.(css|styl)/, 
                loader: ExtractTextPlugin.extract('css!stylus') 
            },
            { 
                test: /\.(svg|png|ttf|eot|woff|woff2)(\?v=.+)?$/, 
                loader: 'file?name=[path][name].[ext]' 
            }
        ]
    },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({ 
        template: `${__dirname}/src/pages/index.pug`, 
        filename: 'index.html', 
        chunks: ['main'] 
    }) 
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx'],
  },

  devtool: 'cheap-inline-module-source-map',

  watch: true,

  devServer: {
    contentBase: `./build`
  },

};