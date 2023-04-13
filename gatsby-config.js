require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Mikadifo`,
        description: `This is Mikadifo's personal portfolio`,
        image: `src/images/icon.svg`,
        siteUrl: `https://www.mikadifo.com`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Mikadifo`,
                short_name: `Mika`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
    ],
};
