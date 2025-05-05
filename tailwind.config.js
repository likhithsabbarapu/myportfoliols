/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable dark mode using the 'class' strategy (this works well with a toggle).
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Ensure all files in your src folder are considered for purging
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Adding custom font 'Poppins'
        },
      },
    },
    plugins: [],
  };
  