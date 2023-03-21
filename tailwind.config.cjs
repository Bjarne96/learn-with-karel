/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            'code-grey': '#282c34',
            'code-blue' : '#61afef',
            'custom-blue' : '#0e3a60',
            'custom-darkblue' : '#082238'
        }
    }
  },
  plugins: [],
};

module.exports = config;
