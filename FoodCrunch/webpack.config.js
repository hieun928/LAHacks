var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry : path.join(__dirname,"src/app.js"),
    output: {   
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }


}