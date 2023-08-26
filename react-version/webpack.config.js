const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV ?? 'development',
    entry: './src/index.tsx',
    module: {
       rules: [
        {
            test: /.tsx?$/,
            exclude: /node_modules/,
            use: "ts-loader"
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
       ] 
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    }
};
