/* eslint-disable @typescript-eslint/camelcase */
require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 0.5,
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true,
      develop: false,
      whitelist: ['social--twitter', 'social--instagram', 'social--email', 'social--cat'], // Don't remove this selector
      ignore: [
        '/styles/index.sass',
        'node_modules/sal.js/dist/sal.css',
        'node_modules/react-image-lightbox/style.css',
      ],
    },
  },
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
