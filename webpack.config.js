const MiniCssExtractPlugin = require('mini-css-extract-Plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/app/index.js',
    optimization: {
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    },
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/images',
                    publicPath: 'images'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            options: {
                minimize: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, './src/public'),
        writeToDisk: false,
        hot: true
    }
}