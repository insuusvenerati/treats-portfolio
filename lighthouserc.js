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
      token: 'aa4f21ca-7b29-4a71-a1f9-f4d7e0d9dbef',
    },
  },
};
