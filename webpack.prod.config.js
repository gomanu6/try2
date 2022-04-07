const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');

const common = require('./webpack.common.config');

const config = {


    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
    },
}


module.exports = merge(common, config)