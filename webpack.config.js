var path = require('path');
// webpack import is not required when we use html-webpack-plugin
// var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');


// Below is the configuration for multiple entry
module.exports = {
    mode: 'development',
    context: path.join(__dirname,'src\\'),
    entry: {
        app: '.\\js\\apps.js',
        alert: '.\\js\\simpleAlert.js',
    },
    output:{
        path: path.join(__dirname,'dist','js'),
        filename: '[name].bundle.js',
        publicPath: path.join(__dirname,'dist','js'),
    },
    module: {
        rules:[{
            // test describes which file are quilified for a specific loader
            // we use regular expression here
            test: /\.js$/,//$ specifies .js is the end of the file
            // what directory to include and exclude for loader to work
            include: path.join(__dirname,'src'),
            exclude: path.join(__dirname,'node_modules'),
            use:{
                //name of the loader to use for above specific files
                loader: 'babel-loader',}
            
        }]
    },
    devServer: {
        // need to mention the entry point of the application
        // contentBase: path.join(__dirname),
        port:9090,
        //host: '0.0.0.0',
        historyApiFallback : {
            index: 'doctorD.html',
        },
        inline: true,
        https: true,
        open:false,
        publicPath: path.join(__dirname,'dist','js'),
        //stats: 'errors-only',
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: path.join(__dirname,'doctorD.html'),
        })
    ]
}

// // Below is the configuration for multiple entry
// module.exports = {
//     //context will set the base directory,
//     //this will prevent us from writing the path everytime
//     context: path.join(__dirname,'src\\'),
//     entry: {
//         // again the path is specific to OS
//         app: '.\\js\\apps.js',
//         alert: '.\\js\\simpleAlert.js',
//     },
//     output:{
//         path: path.join(__dirname,'dist','js'),
//         //name will append the name of the entry point to the bundle file.
//         //there are multiple method command like [name], [hash]
//         //we can add them separated by dot(best-practice) or without nothing
//         filename: '[name].bundle.js'
//     }
// }

// // Below is the configuration for single entry
// module.exports = {
//     entry: path.join(__dirname,'src','js','apps.js'),
//     output:{
//         path: path.join(__dirname,'dist','js'),
//         filename: 'bundle.js'
//     }
// };