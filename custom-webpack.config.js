const path = require("path");
const webpack = require("webpack");

module.exports = (config, options) => {

  config.output.path = path.resolve(__dirname, './www/features/base/');
  config.output.publicPath = "features/base/";
  console.log(config);

  return config;
};
