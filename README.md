#About webpack:
> Webpack is used for bundling files.
> Webpack can bundle js, css, urls etc using separate loaders.
> Webpack by default looks for webpack.config.js file.
> Command to execute webpack.config.js is using webpack
> We can have multiple entry points independent of each other. This really helps to load what is required instead of loading all the JS files.
> Context key is used in webpack.config.js to set the base directory which it is pointing everytime.
> Another important feature of webpack is loader.
> Webpack allow us to use loaders for pre-processing files. We can bundle any static resorces beyond normal java-script.. Installation and configuration details below. 
> List all the available loaders are listed here:
ref: https://webpack.js.org/loaders/

#About webpack-dev-server:
> Webpack-dev-server : is an expressjs http server.
>Below are uses of the server:
-  This is used to save the disk from dist folder as these files are not required for developments. This is required when it is hosted in production.
- to run the application using a server, not from local file system.
> by default webpack-dev-server will look for index.js, if html file name is different, then use historyApiFallback key in devserver.
> Hot module reloading is reloading the files once they are modified after the server has started.
> Hot module reloading will not work by default as this is not availble. Only with few type of js it works. For example we have hot-module reloading with ReactJS.

#HTML Webpack plugin:
> to use this feature we need to install html-webpack-plugin using yarn or npm as dev-dependencies
-   yarn add -D html-webpack-plugin
> need to configure webpack.config.js with plugin key.

##Installing babel-loader using webpack:
>   installing required module for webpack 
    npm i -D babel-loader babel-core
    OR
    yarn add -D babel-loader babel-core

>   installing babel box to transpile es2015 code to ES5:
    yarn add -D babel-preset-es2015


