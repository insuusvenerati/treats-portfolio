/* eslint-disable @typescript-eslint/camelcase */
require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-plugin-nprogress',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Laura Norwood`,
      short_name: `Laura Norwood`,
      start_url: `/`,
      background_color: `#F0E6E0`,
      theme_color: `#9DAD9E`,
      display: `standalone`,
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 1,
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      develop: false, // Enable while using `gatsby develop`
      // tailwind: true, // Enable tailwindcss support
      whitelist: ['social--twitter', 'social--instagram', 'social--email', 'social--cat'], // Don't remove this selector
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
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
