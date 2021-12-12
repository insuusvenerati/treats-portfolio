module.exports = {
  client: {
    addTypename: true,
    excludes: [],
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-source-contentful/src/fragments.js',
      './node_modules/gatsby-source-datocms/fragments/*.js',
      './node_modules/gatsby-source-sanity/fragments/*.js',
      './node_modules/gatsby-transformer-sharp/src/fragments.js',
      './node_modules/gatsby-plugin-image/dist/src/components/*.d.ts',
      '__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'gatsbySchema',
      localSchemaFile: './schema.graphql',
    },
    tagName: 'graphql',
  },
};
