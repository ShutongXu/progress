var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["babel-polyfill", __dirname + "/index.js"], //已多次提及的唯一入口文件
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	devtool: 'eval-source-map', //调试工具
	devServer: {
		contentBase: "./", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true,
		hot:true,
		port:8080
	},
	module: {
		rules: [{
			test: /(\.jsx|\.js)$/,
			use:{
				loader: 'babel-loader',
				options: {
					presets: [
						"es2015"
					]
				}
			},
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			},{
				loader: 'css-loader',
				options: {
					// 如果设置此项则组件内的css只能在组件内使用
					// modules: true
				}
			}]
		},{
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=50000&name=[path][name].[ext]'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),//热加载插件
	]
};