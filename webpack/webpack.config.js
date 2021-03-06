var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const SETTINGS = {
	DEVTOOL: process.env.WEBPACK_DEVTOOL || 'source-map',
	SRCDIR: path.join(__dirname, '..', 'client'),
	OUTDIR: path.join(__dirname, '..', 'build')
}

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(SETTINGS.SRCDIR, 'bundle.jsx')
	],
	devtool: SETTINGS.DEVTOOL,
	output: {
		path: SETTINGS.OUTDIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders: loaders,
		noParse: /json-schema.+$/
	},
	devServer: {
		contentBase: SETTINGS.OUTDIR,
		noInfo: true,
		hot: true,
		inline: true,
		port: SETTINGS.PORT,
		host: SETTINGS.HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.join(SETTINGS.SRCDIR, 'index.html')
			},
			{
				context: path.join(SETTINGS.SRCDIR, 'media'),
				from: "**/*",
				to: path.join(SETTINGS.OUTDIR, 'media')
			}
		])
	],
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
};