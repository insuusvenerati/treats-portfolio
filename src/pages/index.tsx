import * as React from 'react';
import Layout from '../components/Layout';
import BgImageContainer from '../components/BgImageContainer';
import { PageProps } from 'gatsby';
import * as Sentry from '@sentry/react';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Sentry.ErrorBoundary fallback={<h1>Error</h1>}>
      <BgImageContainer />
    </Sentry.ErrorBoundary>
  </Layout>
);

export default IndexPage;
