/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/*.js',
        './src/components/*.js',
        './src/components/curves/*.js',
    ],
    darkMode: 'class',
    theme: {
        fontSize: {
            'h2-sm': ['44px', '60px'],
            'h2-md': ['72px', '88px'],
            'h2-lg': ['84px', '100px'],
            'h3-sm': ['34px', '46px'],
            'h3-md': ['50px', '60px'],
            'h3-lg': ['60px', '70px'],
            'h4-sm': ['28px', '36px'],
            'h4-md': ['36px', '40px'],
            'h4-lg': ['42px', '50px'],
            'h6-md': ['18px', '24px'],
            'h6-lg': ['21px', '27px'],
            p: ['21px', '30px'],
        },
        boxShadow: {
            dark: [
                '0px 100px 80px rgba(245, 246, 255, 0.07)',
                '0px 41.7776px 33.4221px rgba(245, 246, 255, 0.0503198)',
                '0px 22.3363px 17.869px rgba(245, 246, 255, 0.0417275)',
                '0px 12.5216px 10.0172px rgba(245, 246, 255, 0.035)',
                '0px 6.6501px 5.32008px rgba(245, 246, 255, 0.0282725)',
                '0px 2.76726px 2.21381px rgba(245, 246, 255, 0.0196802)',
            ],
            light: [
                '0px 100px 80px rgba(6, 4, 45, 0.07)',
                '0px 41.7776px 33.4221px rgba(6, 4, 45, 0.0503198)',
                '0px 22.3363px 17.869px rgba(6, 4, 45, 0.0417275)',
                '0px 12.5216px 10.0172px rgba(6, 4, 45, 0.035)',
                '0px 6.6501px 5.32008px rgba(6, 4, 45, 0.0282725)',
                '0px 2.76726px 2.21381px rgba(6, 4, 45, 0.0196802)',
            ],
        },
        colors: {
            'blue-dark': '#06042D',
            white: '#F5F6FF',
            primary: '#0515FF',
            secondary: '#0473FF',
            curves: '#2E66E2',
            error: '#EE1B41',
            success: '#21AD0A',
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
