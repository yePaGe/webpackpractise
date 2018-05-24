const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../app/main.js'),
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle--[hash].js"
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 400000, // 整数类型（以字节为单位）
        maxEntrypointSize: 400000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
          // 提供资源文件名的断言函数
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(
            ['dist/bundle--*.js'], 
            {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        })
    ]
}