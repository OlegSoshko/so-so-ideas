const webpack = require("webpack");
const comon = require("./webpack.comon.config");

module.exports = {
  ...comon,
  mode:'production',
  plugins: [
    ...comon.plugins,
    new webpack.DefinePlugin({
      PUBLIC_PATH: JSON.stringify('so-so-ideas')
    })
  ]
}