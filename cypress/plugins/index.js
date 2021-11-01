/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on) => {
  // You need to use your PnP file to resolve files. The following is just the path that traverses up to where my PnP file is in our repo root.
  const pnp = require("../../.pnp.cjs");
  // I couldn't find this documented, but this appears to monkey-patch require and do all the other necessary things to get PnP working
  pnp.setup();

  // This is where we'll be resolving packages from. In this case, it is a workspace package we have named, but using a relative path here should work as well to resolve from a specific folder.
  const targetModule = "@mypackages/package";

  // We need to patch the webpack config that cypress uses (which is v4 which needs a plugin for PnP support)
  const webpackPreprocessor = require(pnp.resolveToUnqualified("@cypress/webpack-preprocessor", targetModule));
  const PnpWebpackPlugin = require(pnp.resolveToUnqualified("pnp-webpack-plugin", targetModule));

  const options = {
    webpackOptions: {
      resolve: {
        plugins: [
          PnpWebpackPlugin,
        ],
      },
      resolveLoader: {
        plugins: [
          PnpWebpackPlugin.moduleLoader(module),
        ],
      },
    },
    watchOptions: {},
  };

  on("file:preprocessor", webpackPreprocessor(options));
};

