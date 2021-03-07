/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: `.env` });

module.exports = {
  repositoryUrl: 'https://github.com/insuusvenerati/treats-portfolio',
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.MD',
      },
    ],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): ${nextRelease.version} [CI SKIP]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
