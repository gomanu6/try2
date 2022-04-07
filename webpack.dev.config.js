const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.config');

const config = {

    mode: 'development',
    devtool: 'source-map',

    devServer: {
        port: 9001,
        hot: true,
        static: path.resolve(__dirname, 'dev'),
    },

    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].bundle.js',
    },

    
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizer,
            new TerserPlugin
        ]
    },
}


module.exports = merge(common, config)