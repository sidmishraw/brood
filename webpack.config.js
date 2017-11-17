/**
* webpack.config.js
* @author Sidharth Mishra
* @description My Webpack configuration file
* @created Thu Nov 16 2017 15:32:51 GMT-0800 (PST)
* @copyright 2017 Sidharth Mishra
* @last-modified Thu Nov 16 2017 15:32:51 GMT-0800 (PST)
*/
//============================================================================

//# imports CommonJS style
const path = require("path");
const webpack = require("webpack");
//# imports CommonJS style

//============================================================================

/**
 * The Webpack configuration object, configures Webpack for the project.
 */
const webpackConfig = {
  //# entry points, can be multiple files if multiple JS files are needed in the library/project
  entry: {
    brood: path.join(__dirname, "/src/index.js") // the entry point of the dependency graph
  },
  //# entry points, can be multiple files if multiple JS files are needed in the library/project

  //# output, I compile this JS code as a library
  output: {
    filename: "./bin/[name].js"
  },
  //# output, I compile this JS code as a library

  //# module specific configurations, and loaders
  module: {
    loaders: [
      //# use babel to transpile JSX and ES6
      {
        test: /\.jsx{0,1}$/i, // matches files ending with js or jsx
        loader: "babel-loader",
        exclude: /node_modules/i,
        query: {
          presets: ["env"] // babel loader used for transpiling ES6 code and JSX
        }
      }
      //# use babel to transpile JSX and ES6
    ]
  },
  //# module specific configurations, and loaders

  //# targets node
  target: "node",
  //# targets node

  //# plugins
  plugins: [
    //# adds the shebang at the top of the output bundle
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true
    })
    //# adds the shebang at the top of the output bundle
  ]
  //# plugins
};

//============================================================================

module.exports = webpackConfig;

//============================================================================
