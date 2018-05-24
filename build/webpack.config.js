const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../app/main.js'),
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), //本地服务器所加载页面所在的目录
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env", "react"  //允许使用ES6以及JSX语法
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('my own programe'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}