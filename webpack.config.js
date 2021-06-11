const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const packageJson = require('./package.json');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new SentryWebpackPlugin({
          // sentry-cli configuration
          authToken: 'd685378e05334d349f2de35f2107b371a8bf532d70bc447f8957313edbc8e13a',
          org: 'sean-96',
          project: 'treats-portfolio',

          // webpack specific configuration
          include: './public',
          release: packageJson.version,
        }),
      ],
    });
  }
};
