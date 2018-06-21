const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const bundleTag = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

module.exports = {
    devtool: 'source-map',
    entry: [
        './client/homadic'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: bundleTag + '.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'indexTemplate.html'
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
