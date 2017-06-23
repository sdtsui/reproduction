const webpack = require('webpack');
module.exports = {
	entry: {
		main: './index.js',
	},
	output: {
		filename: 'dist.js'
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
