/**
 * 为什么需要使用webpack打包server端代码？
 * 1. server端代码使用了es modules语法，node环境不支持
 * 2. server段代码使用了jsx，node环境不支持。
 *
 * */
const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const webpackBaseConfig = require("./webpack.base.js");

const webpackServerConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  // 默认情况下服务器端代码打包后的文件，会包含path，http等node模块，但其实我们本身就是在node环境下运行，
  // 所以可以把这些node模块剔除掉，这样也可以减少打包后的文件体积，这里借助webpack-node-externals插件来实现。
  externals: [nodeExternals()],
};

module.exports = merge(webpackBaseConfig, webpackServerConfig);
