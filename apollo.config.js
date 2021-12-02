module.exports = {
  client: {
    addTypename: false,
    excludes: [],
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-source-contentful/src/fragments.js',
      './node_modules/gatsby-source-datocms/fragments/*.js',
      './node_modules/gatsby-source-sanity/fragments/*.js',
      './node_modules/gatsby-transformer-sharp/src/fragments.js',
      '__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'gatsbySchema',
      localSchemaFile: '__generated__/gatsby-schema.graphql',
    },
    tagName: 'graphql',
  },
};
