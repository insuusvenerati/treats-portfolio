module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/', 'http://localhost/about'],
      isSinglePageApplication: true,
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://stiforr-lighthouse.herokuapp.com/',
      token: process.env.LCHI_TOKEN,
    },
  },
};
