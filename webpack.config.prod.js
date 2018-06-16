var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        './client/homadic'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'static'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'client')
            },
            // SCSS
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            // JSON
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // PNG/Images
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
