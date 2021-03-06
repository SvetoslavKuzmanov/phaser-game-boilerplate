var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

var minimize = process.argv.indexOf('--minimize') !== -1

var config = {
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, 'src/js/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, "build/js"),
        publicPath: '/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /pixi\.js/,
            loader: 'expose?PIXI'
        }, {
            test: /phaser-split\.js$/,
            loader: 'expose?Phaser'
        }, {
            test: /p2\.js/,
            loader: 'expose?p2'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'file-loader?limit=8192&name=../assets/[name].[ext]'
        }]
    },
    stats: {
        warnings: false
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
        }),
        new DashboardPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
}

module.exports = config;

