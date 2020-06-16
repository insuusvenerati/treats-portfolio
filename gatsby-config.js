require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-plugin-manifest',
  `gatsby-plugin-postcss`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-webpack-size`,
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/visdev/`, `/about/`],
    },
  },
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 0.1,
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
];

if (process.env.NODE_ENV === 'production') {
  plugins.push('gatsby-plugin-preact');
}

module.exports = {
  siteMetadata: {
    title: 'Laura Norwood',
  },
  plugins,
};
