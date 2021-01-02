module.exports = {
	darkMode: 'class',
	future: {
		defaultLineHeights: true,
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
		standardFontWeights: true,
	},
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./index.html',
			'./src/**/*.{vue,js,ts,jsx,tsx}',
		],
	},
};