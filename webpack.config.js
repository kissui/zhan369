var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin("./dist/[name].css");
module.exports = {

	entry: {
		index: './index.js'
	},
	//入口文件输出配置
	output: {
		path: __dirname + '/dist/',
		filename: '[name].js'
	},
	module: {
		//加载器配置
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: extractCss.extract(['css', 'sass'])},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},

	sassLoader: {
		includePaths: [path.resolve(__dirname, './dist/')]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		extractCss
	]

};
