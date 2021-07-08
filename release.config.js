/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: `.env` });
const yaml = require('yaml');
const fs = require('fs');

const chart = fs.readFileSync('./k8s/treats-portfolio/Chart.yaml', 'utf8');
const chartVersion = yaml.parse(chart);

module.exports = {
  branches: ['main', { name: 'develop', prerelease: true }],
  repositoryUrl: 'https://github.com/insuusvenerati/treats-portfolio',
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      'semantic-release-helm',
      {
        chartPath: './k8s/treats-portfolio',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.MD',
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          // {
          //   path: `treats-portfolio-${chartVersion.version}.tgz`,
          //   label: 'Helm Package',
          // },
        ],
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.MD', 'k8s/treats-portfolio/Chart.yaml'],
        message: 'chore(release): [CI SKIP] ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
