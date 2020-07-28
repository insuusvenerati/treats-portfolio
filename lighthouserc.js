module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/', 'http://localhost/about'],
      isSinglePageApplication: true,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://secret-lake-49706.herokuapp.com/',
      token: process.env.LCHI_TOKEN,
    },
  },
};
