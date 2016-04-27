var common = require('./webpack.config');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var promise = require('es6-promise').polyfill();
var merge = require('webpack-merge');

module.exports = merge(common, {
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [
			// Load scss
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			// Load fonts
			{
				test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader : 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'react redux',
			template: './src/template/template_dev.html'
		})
	]
});
