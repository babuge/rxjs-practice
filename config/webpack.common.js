const path = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');
const base = path.join(__dirname, '..');
module.exports = {
    entry: {
        app:  path.resolve(base, 'src', 'app.js'),
    },
    output: {
        filename: "[name].js",//输出文件名，[name]表示入口文件js名
        path: path.resolve(base, "dist")//输出文件路径
    },
    module: {
        rules: [
            {
                test: '/\.m?js$/',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-boader',
                    options: {
                        presets: ['env'],
                    }
                }
            }
        ]
    },
    plugins: [
        new uglifyjs(),
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },
}