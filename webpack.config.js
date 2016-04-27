var path = require('path');
var webpack = require('webpack');
var promise = require('es6-promise').polyfill();

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/js/app/App.jsx' // Your appʼs entry point
	],
	resolve: {
		extensions: ['', '.js', '.jsx'] // resolve extensions js, jsx
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			// add JSHint
			{
				test: /\.js?$/,
				loaders: ['jshint'],
				include: APP_PATH
			}
		],
		loaders: [
			// Compile jsx ES6 with bable
			// add React-hot loader
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel'],
				include: APP_PATH
			},
			// Load image files
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
				]
			}
		]
	}
};
