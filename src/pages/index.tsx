import * as React from 'react';
import Layout from '../components/layout';
import BGImageContainer from '../components/bgImageContainer';
import ErrorBoundary from '../components/errorBoundary';
import { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => (
  <ErrorBoundary>
    <Layout>
      <BGImageContainer />
    </Layout>
  </ErrorBoundary>
);

export default IndexPage;
