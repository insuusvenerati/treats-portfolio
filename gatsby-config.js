require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Creative Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        width: 1100,
        defaultQuality: 100,
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
