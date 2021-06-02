const { fontFamily, boxShadow, fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						ol: {
							li: {
								'&:before': { color: theme('colors.gray.900') }
							}
						},
						ul: {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.900') }
							}
						}
					}
				},
				dark: {
					css: {
						'color': theme('colors.gray.200'),
						'h1,h2,h3,h4': {
							color: theme('colors.gray.200')
						},
						'blockquote': {
							color: theme('colors.gray.200')
						},
						'ol': {
							li: {
								'&:before': { color: theme('colors.gray.200') }
							}
						},
						'ul': {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.200') }
							}
						},
						'strong': { color: theme('colors.gray.200') }
					}
				}
			})
		},
		fontFamily: {
			sans: ['montserrat', ...fontFamily.sans],
			serif: ['charter', ...fontFamily.serif],
			default: ['system-ui']
		},
		fontSize: {
			...fontSize,
			xxl: '1.675rem'
		},
		boxShadow: {
			...boxShadow,
			link: '0 1px 0 0 currentColor',
			cm: '0 2px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
		}
	},
	variants: {
		extend: {},
		typography: ['dark']
	},
	important: true,
	plugins: [require('@tailwindcss/typography')]
};
