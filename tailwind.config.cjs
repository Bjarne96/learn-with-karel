/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            'code-grey': '#282c34',
            'code-lightgrey': '#7d8799',
            'code-blue' : '#61afef',
            'custom-blue' : '#0e3a60',
            'custom-darkblue' : '#082238',
            'tasks-blue': '#135185',
            "tasks-lightblue": '#1f7fd2'
        }
    }
  },
  plugins: [],
};

module.exports = config;
