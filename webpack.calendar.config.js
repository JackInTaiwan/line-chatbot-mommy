var webpack = require("webpack");
var path = require("path");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

var srcDirName = "src_calendar";
// var srcDirName = "src_setting";


module.exports = {
	context: path.join(__dirname, srcDirName),
	entry: {
		// bundle_calendar: "./index.js",
		// vendor_calendar: ["react"]
		bundle_setting: "./index.js",
		vendor_setting: ["react"]
	},
	output: {
		path: path.resolve(__dirname, "dist_calendar"),
		filename: "static/[name].js"
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: "babel"
		}, 
		{
			test: /\.less$/,
			loader: "style!css!postcss!less"
		},
		// {
		// 	test: /\.css/,
		// 	loader: ExtractTextPlugin.extract("style", "css", "postcss")	
		// },
		{
			test: /\.css$/, // Only .css files
			loader: "style!css" // Run both loaders
		},  
		{
			test: /\.(png|jpg)$/,
			loader: "url?limit=25000"
		},
		{
			test: /\.json$/,
			loader: "json-loader"
		},
		{
			test: /\.svg$/,
			include: [/react-images-upload/],
			loader: 'file-loader',
			options: {
					name: '[name].[ext]?[hash]'
			}
			}]
	},
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss", ".less", ".css", "json"]
	},
	postcss: [autoprefixer],
	plugins: [
		new webpack.DefinePlugin({
			DEBUG: process.env.NODE_ENV !== "production"
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, `${srcDirName}/index.html`)
		}),
		new OpenBrowserPlugin({ url: "http://localhost:8080" })
	]

};
