module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				osu: '#ff66aa',
				osbjs: '#4d04de',
				'osbjs-light': '#520ae3',
				'osbjs-bright': '#6e26ff',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
