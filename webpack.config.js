const path = require('path');

const PATHS = {
  public: path.join(__dirname, 'public'),
  build: path.join(__dirname, 'build')
};

module.exports = {
    entry: path.resolve('./src/index.jsx'),
    output: {
        path: path.resolve('./public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ],
    },
};
