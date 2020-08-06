import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import * as Sentry from '@sentry/react';
import VisdevImageContainer from '../components/VisdevImageContainer';

const VisdevPage: React.FC<PageProps> = () => (
  <Layout>
    <Sentry.ErrorBoundary fallback={<h1>Error</h1>}>
      <VisdevImageContainer />
    </Sentry.ErrorBoundary>
  </Layout>
);

export default VisdevPage;
