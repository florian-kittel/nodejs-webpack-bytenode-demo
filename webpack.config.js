const path = require('path');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ],
    },
    module: {
        rules: [{
            use: []
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/^pg-native$/),
        new webpack.IgnorePlugin(/^pg.js.*/),
    ],
};
