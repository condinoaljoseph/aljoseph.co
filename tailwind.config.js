const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['montserrat', ...fontFamily.sans],
			serif: ['charter', ...fontFamily.serif],
			default: ['system-ui']
		},
		boxShadow: {
			...boxShadow,
			link: '0 1px 0 0 currentColor',
			cm: '0 2px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
