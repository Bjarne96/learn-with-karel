## Description
- The project aimed to develop a learning platform for JavaScript beginners, gather data, and analyze the learning concepts used.
- It was conducted in the context of <a href="https://github.com/jan-lukas-bichel">Jan-Lukas-Bichel's</a> bachelor thesis and funded by <a href="https://www.isa.uni-hamburg.de/ddlitlab.html">DDLitLab</a>.
- This repository is based on <a href="https://github.com/fredoverflow/karel">Karel the Robot</a>, which teaching institutions use to introduce programming concepts to beginners.
- It is built for the web, making it easily accessible for students.

## Tech - Stack
- TypeScript and Webpack as underlying technologies
- React.js and Tailwind CSS for the frontend
- Next.js and MongoDB for the backend and data storage
- Netlify as the hosting service

## Learnings
- In-depth understanding of React.js and Next.js procedures and techniques
- TypeScript configurations and concepts
- Tailwind CSS and its unique approach to CSS styling
- Collaborating in developing data structures
- Project planning with appropriate technologies, as well as deployment and hosting strategies

## Installation
    1.  Create .env file in main directory.
    2.  Set mongodb URI and replace <user>,<pw> and <domain> in "MONGODB_URI=mongodb+srv://<user>:<pw>@<domain>" in the .env file.
    3.  Run "npm i" in the console to install all modules.
    4.  Run "npm run dev" in the console to start the dev server.
    
    Create a branch and only push to main when your changes are completed, in order to reduce build time on Netlify.
    Run 'npm run build' to test your changes before pushing or merging them to main (especially for ESLint errors)

*&nbsp;This project is maintained further <a href="https://github.com/jan-lukas-bichel/Cassie-Coding-Assisted">here</a>.