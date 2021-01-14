// entry is where the webpack begins to grab files
// dist is the repository with bundle.js where the files are bundled and sent 
// __dirname is a node.js global variable containing the name of the directory that the currently executing script resides in.

// const path = require('path');
 
// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'),
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js',
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, './dist'),
//     port: '3000',
//     inline: true
//   },
// };


// module.exports = {
//     // 1
//     entry: './src/index.js',
//     // 2
//     output: {
//       path: '/dist',
//       filename: 'bundle.js'
//     },
//     // 3
//     devServer: {
//       contentBase: './dist'
//     },

//     resolve: {
//         extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
//     modules: [
//       './node_modules',
//       './app'
//     ]
//     }
//   };

module.exports = {
    entry: {
        myApp: "./src/index",
    },
    // loaders are NPM packeges that need to be loaded, they process files you import
//    bundle is the file created by webpack, bundled together, that takes everything from the entry file
    // __dirname is a node.js global variable containing the name of the directory that the currently executing script resides in.
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: __dirname + '/dist/'
    },
    // these use loaders are written in regular expresssions
    module: {
        rules: [
            {test: /\.css$/,
            use: "style-loader"},
            {test: /\.css$/,
            use: "css-loader"},
        ]
    },
    devServer: {
        contentBase: "./dist",
        // port: "3000",
        inline: true
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
    modules: [
      './node_modules',
      './app'
    ]
    }

}