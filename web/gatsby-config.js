require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

module.exports = {
  siteMetadata: {
    title: `Gatsby_Sanity_Stater`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `Gatsby_Sanity_Stater Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     ...sanityConfig,
    //   },
    // },
  ],
};
