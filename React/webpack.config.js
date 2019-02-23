var path = require('path');

module.exports = {
    context: path.join(__dirname, "public"),
    entry: '../src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias:{
            Mod1: 'public/Components/mod1.jsx',
            Mod2:'public/Components/mod2.jsx',
            Mod3: 'public/Components/mod3.jsx'
        },
        extensions: ['*','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
}