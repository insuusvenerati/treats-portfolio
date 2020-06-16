require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Laura Norwood",
      short_name: "Laura Norwood",
      start_url: "/",
      background_color: "#F0E6E0",
      theme_color: "#9DAD9F",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      // icon: "src/images/icon.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: ``,
    },
  },
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
