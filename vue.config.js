const TerserPlugin = require("terser-webpack-plugin");
const isProd = "production";
const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const versao = JSON.parse(packageJson).version || 0;
var webpack = require('webpack');

const publicPath = meta.env.VITE_APP_BASE_URL;

module.exports = {
  productionSourceMap: false,
  publicPath,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: isProd
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true
                },
                output: {
                  comments: false
                }
              }
            })
          ]
        : []
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { PACKAGE_VERSION: '"' + versao + '"' }
      })
    ]
  }
};
