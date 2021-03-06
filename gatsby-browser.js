import * as Sentry from '@sentry/react';
import packageJson from './package.json';
import './src/styles/index.sass';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` + `Reload to display the latest version?`,
  );
  if (answer === true) {
    window.location.reload();
  }
};

export const onClientEntry = () => {
  Sentry.init({
    dsn: process.env.GATSBY_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: packageJson.version,
  });
};
