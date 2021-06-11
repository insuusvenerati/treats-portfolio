import * as Sentry from '@sentry/gatsby';
import { PageProps } from 'gatsby';
import * as React from 'react';
import BgImageContainer from '../components/BgImageContainer';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Sentry.ErrorBoundary fallback={<h1>Error</h1>}>
      <BgImageContainer />
    </Sentry.ErrorBoundary>
  </Layout>
);

export default IndexPage;
