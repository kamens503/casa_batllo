module.exports = {
    content: ["./src/**/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}"],
    theme: {
        fontFamily: {
            'title' : ['Calistoga', 'cursive'],
            'content': ['Poppins', 'sans-serif']
        },
      extend: {
          colors: {
              'brand' : '#D96006',
              'brand-yellow' : '#E29524'
          },

      },
    },
    plugins: [],
  }