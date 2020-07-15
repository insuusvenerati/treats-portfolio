import React from 'react';
import Layout from '../components/layout';
import BGImageContainer from '../components/bgImageContainer';
import ErrorBoundary from '../components/errorBoundary';

const IndexPage = () => (
  <ErrorBoundary>
    <Layout>
      <BGImageContainer />
    </Layout>
  </ErrorBoundary>
);

export default IndexPage;
