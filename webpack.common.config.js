const path = require('path');
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {

    entry: {
        main: './src/assets/js/index.js',
    },

    output: {
        clean: true,
    },
  

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
            chunks: ['main'],
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|gif|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: 'assets/images',
                        esModule: false,
                    }
                }
            },
        ]
    }





}

module.exports = config;