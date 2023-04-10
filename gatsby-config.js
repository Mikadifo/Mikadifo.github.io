/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Mikadifo`,
        siteUrl: `https://www.mikadifo.com`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        'gatsby-transformer-sharp',
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
