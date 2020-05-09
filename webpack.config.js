const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV || 'development';
const isDevelopment = mode === 'development';

module.exports = {
    mode: mode,
    entry: "./js/main.js",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? "[name].css" : "[chunkhash]-[name].css",
            chunkFilename: isDevelopment ? "[id].css" : "[chunkhash]-[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000,
        compress: true
    }
}