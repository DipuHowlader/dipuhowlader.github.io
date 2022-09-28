const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
    protfolio: path.resolve(__dirname, "src/protfolio.js"),
    contact: path.resolve(__dirname, "src/contact.js"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    liveReload: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename:"index.html",
      title: "Dipu || Home",
      template: "public/index.html",
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      filename:"protfolio.html",
      title: "Dipu || protfolio",
      template: "public/protfolio.html",
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      filename:"contact.html",
      title: "Dipu || contact",
      template: "public/contact.html",
      chunks: ["app"]
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpeg|svg)$/,
        use:[
      {
          loader: 'file-loader',
            options: {
              context: path.resolve(__dirname, 'src/assets'),
              name: "[name].[hash].[ext]",
              outputPath: 'images/',
              publicPath: 'images/'
            }}
        ],
      },

    ],
  },
};
