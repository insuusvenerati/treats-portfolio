require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-robots-txt`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-theme-contact`,
    options: {
      contactPath: '/contact',
      successPath: '/thanks',
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: require('sass'),
    },
  },
  // {
  //   resolve: '@mkitio/gatsby-theme-password-protect',
  //   options: {
  //     password: process.env.GATSBY_PAGE_PASSWORD,
  //     pagePaths: ['/visdev'],
  //   },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Laura Norwood',
      short_name: 'Laura Norwood',
      start_url: '/',
      background_color: '#F0E6E0',
      theme_color: '#9DAD9F',
      display: 'standalone',
      icon: 'src/images/icon_catbot.png',
      crossOrigin: ``,
    },
  },
  `gatsby-transformer-remark`,

  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 0.1,
    },
  },
  {
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: process.env.DATO_API_TOKEN,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-110954146-2`,
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/visdev/`, `/about/`, '/'],
    },
  },
  `gatsby-plugin-codegen`,
];

module.exports = {
  siteMetadata: {
    siteUrl: `https://ljnorwood.com`,
    title: 'Laura Norwood',
  },
  plugins,
};
