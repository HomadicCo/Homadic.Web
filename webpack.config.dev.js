var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/homadic'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
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
        ],
        rules: [
            {
                enforce: 'pre',
                test: /\.js|jsx$/,
                exclude: [/node_modules/, /homadic.js/],
                loader: 'eslint-loader',
                options: {
                    quiet: true,
                }
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
