import React from 'react';
import Layout from '../components/layout';
import BGImageContainer from '../components/bgImageContainer';
import ErrorBoundry from '../components/errorboundry';

const IndexPage = () => (
  <ErrorBoundry>
    <Layout>
      <BGImageContainer />
    </Layout>
  </ErrorBoundry>
);

export default IndexPage;
