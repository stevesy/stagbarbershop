const path = require('path');

module.exports = {
	mode: 'development',
	entry: './website/wp-content/themes/stagbarbershop/assets/scripts/index.js',
	output: {
		path: path.resolve(__dirname, 'website/wp-content/themes/stagbarbershop/public/js'),
		filename: 'site.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};