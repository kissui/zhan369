var webpack = require('webpack');
var path = require('path');
module.exports = {

	entry: {
		index : './index.js'
	},
	//入口文件输出配置
	output: {
		path: __dirname +'/dist/',
		filename: '[name].js'
	},
	module: {
		//加载器配置
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},
	//其它解决方案配置
	resolve: {
		extensions: ['', '.js', '.json', '.scss'],
		alias: {
			filter: path.join(__dirname, 'src/filters')
		}
	}
};