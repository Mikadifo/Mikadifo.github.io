/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/*.js', './src/components/*.js'],
    darkMode: 'class',
    theme: {
        colors: {
            'blue-dark': '#06042D',
            white: '#F5F6FF',
            primary: '#0515FF',
            secondary: '#0473FF',
        },
        extend: {
            fontFamily: {
                kufam: ["'Kufam', verdana, monaco"],
                'league-spartan': ["'League Spartan', verdana, monaco"],
            },
        },
    },
    plugins: [],
};
