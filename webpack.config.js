const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "app.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  externals: [nodeExternals()]
};
