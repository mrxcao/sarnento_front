const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const versao = JSON.parse(packageJson).version || 0;
var webpack = require('webpack');

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_BASE_URL,
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
