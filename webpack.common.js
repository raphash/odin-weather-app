const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new ESLintWebpackPlugin({
      configType: "flat",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
    clean: true,
  },
};
