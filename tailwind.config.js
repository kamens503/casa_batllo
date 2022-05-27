module.exports = {
	content: ['./src/**/*.{html,js,jsx}', './src/**/**/*.{html,js,jsx}'],
	theme: {	
		extend: {
            fontFamily: {
                title: ['Calistoga', 'cursive'],
                content: ['Poppins', 'sans-serif'],
            },
			colors: {
				'brand': '#D96006',
				'brand-yellow': '#E29524',
			},
			backgroundImage: {
				'ripped-lg': "url('/src/assets/ripped_lg.svg')",
				'ripped-xs': "url('/src/assets/ripped_xs.svg')",
			},
		},
	},
	plugins: [],
};
