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
            Mod1: 'public/components/mod1.jsx',
            Mod2:'public/components/mod2.jsx',
            Mod3: 'public/components/mod3.jsx'
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