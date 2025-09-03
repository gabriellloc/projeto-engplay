const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
	entry: path.resolve(__dirname, "src", "main.js"),
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "docs"),
		clean: true
	},
	devServer: {
		static: {
      directory: path.join(__dirname, "docs")
		},
    port: 3000,
    open: true,
    liveReload: true,
	},

	target: "web",
  mode: "development",

	plugins: [
    new HTMLWebpackPlugin({
      template:path.resolve(__dirname, "src", "index.html"),
      favicon: path.resolve("src", "assets", "icons/logo (ENGPLAY).svg")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "docs", "assets")
        }
      ]
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets : "defaults"}]],
          },
        },
        exclude: "/node_modules",
      }
    ],
  }
}