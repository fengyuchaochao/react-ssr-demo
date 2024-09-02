const path = require("path");
const { merge } = require("webpack-merge");

const webpackBaseConfig = require("./webpack.base.js");

const webpackClientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};

module.exports = merge(webpackBaseConfig, webpackClientConfig);
